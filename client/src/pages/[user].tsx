import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { IUser } from '../Interfaces/UserInterface';
import Profile from '../components/Profile';
import Compliment from '../components/Compliment';
import { ICompliment } from '../Interfaces/ComplimentInterface';
import { DivP } from '../styles/pages/userProfile';
import CreateCompliment from '../components/CreateCompliment';
import { listUserRequest } from '../services/users';
import { complimentsReceiveRequest } from '../services/compliments';
import { listTagsRequest } from "../services/Tags";
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router'

export interface UserProp {
    user: IUser
}

const User = ({user, tags}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {isAuthenticated, user: userData} = useContext(AuthContext)
    const {user: username} = useRouter().query
    const [newCompliments, setNewCompliments] = useState<ICompliment[] | null>([])

    useEffect(() => {
        setNewCompliments([]);
    }, [username])

    return (
        <DivP>
            <Profile id={user.id} name={user.name} username={user.username}/>
            {isAuthenticated && username !== userData?.username && <CreateCompliment 
                tags={tags} 
                id={user.id} 
                setNewCompliments={setNewCompliments}/>}
            {newCompliments?.map((compliment: ICompliment) => (
                <div className="comment new animeLeft" key={compliment.id} ><Compliment  compliment={compliment}/></div>
            ) )}
            {user?.compliments?.map((compliment: ICompliment) => (
                <div className="comment animeRight" key={compliment.id} ><Compliment  compliment={compliment}/></div>
            ) )}
            {(user.compliments.length === 0 && newCompliments.length === 0) && <p className="dont">Oops... this user doesn't have any compliments</p>}

        </DivP>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const { user: username } = context.params

    try {
        const res = await listUserRequest(username);
        let user = res.data.user;
        const res2 = await complimentsReceiveRequest(user.username);
        if(res2.data.success) user.compliments = res2.data.compliments;
    
        const resTag = await listTagsRequest();
        let tags;
        if(resTag.data.success) tags = resTag.data.tags

        return {
            props: {user, tags}, // will be passed to the page component as props
          }
        

    } catch (error) {
        return {
            notFound: true,
          }
    }
    
    

  }

export default User
