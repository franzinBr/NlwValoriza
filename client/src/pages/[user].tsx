import React from 'react'
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
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export interface UserProp {
    user: IUser
}

const User = ({user, tags}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {isAuthenticated} = useContext(AuthContext)

    return (
        <DivP>
            <Profile id={user.id} name={user.name} username={user.username}/>
            {isAuthenticated && <CreateCompliment tags={tags} id={user.id}/>}
            {user?.compliments?.map((compliment: ICompliment) => (
                <div className="comment" key={compliment.id} ><Compliment  compliment={compliment}/></div>
            ) )}
        </DivP>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //console.log(context.params)
    
    const { user: username } = context.params
    const res = await listUserRequest(username);
    let user;
    //console.log(res)
    if(res.data.success){
        user = res.data.user;
        const res2 = await complimentsReceiveRequest(user.username);
        if(res2.data.success) user.compliments = res2.data.compliments;
        
    }
   

    //console.log(user)
    const resTag = await listTagsRequest();
    let tags;
    if(resTag.data.success) tags = resTag.data.tags
    
    // fetch user here

    return {
      props: {user, tags}, // will be passed to the page component as props
    }
  }

export default User
