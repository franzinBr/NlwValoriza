import Head from 'next/head'
import Image from 'next/image'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next';
import { listUsersRequest } from '../services/users';
import User from '../components/User';

interface IUser {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    username: string,
    created_at: string,
    updated_at: string
}

type Users = {
    users: IUser[]
}

const Home: React.FC<Users> = ({users}) => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        {users?.map(user => (
            <User key={user.id} username={user.username} name={user.name}></User>
        ))}
      </main>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await listUsersRequest()
    let users = []
    if(res.data.success){
        users = res.data.users;
    }


    return {
      props: {users}, // will be passed to the page component as props
    }
  }



export default Home