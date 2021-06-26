import Button from "./Button"
import React from "react";
import { DivCreateCompliment } from '../styles/components/CreateCompliments';

import { useForm, SubmitHandler } from 'react-hook-form';
import { createComplimentRequest } from "../services/compliments";

interface Tag {
    id: string,
    name: string,
    created_at: string,
    updated_at: string,
    name_custom: string
}

interface Tags{
    tags: Tag[];
    id: string;
}

type Inputs = {
    message: string
};
  

const CreateCompliment: React.FC<Tags> = ({tags, id}) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [select, setSelect] = React.useState('');

    const onSubmit: SubmitHandler<Inputs> = async data => {
        if(data.message.length > 0 && select.length > 0)
        {
            const res = await createComplimentRequest({tag_id: select, user_receiver: id, message: data.message});
            if(res.data.success)  reset({keepValues: false})
        }
    }


    return (
        <DivCreateCompliment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="select">
                    <select value={select} onChange={({ target }) => setSelect(target.value)}>
                    <option value="" disabled>Select your tag</option>
                    {tags?.map(tag => (
                        <option key={tag.id} value={tag.id}>{tag.name}</option>
                    ))}
                    </select>
                </div>
                <div className="input">
                    <textarea id="message" name="message"  {...register("message")}/>
                    <Button>Send</Button>
                </div>

            </form>
        </DivCreateCompliment>
    )
}


export default CreateCompliment;