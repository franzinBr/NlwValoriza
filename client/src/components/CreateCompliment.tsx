import Button from "./Button"
import React from "react";
import { DivCreateCompliment } from '../styles/components/CreateCompliments';

import { useForm } from "react-hook-form";
import { listTagsRequest } from "../services/Tags";

interface Tag {
    id: string,
    name: string,
    created_at: string,
    updated_at: string,
    name_custom: string
}

interface Tags{
    tags: Tag[];
}

const CreateCompliment: React.FC<Tags> = ({tags}) => {
    const [select, setSelect] = React.useState('');

    return (
        <DivCreateCompliment>
            <form>
                <div className="select">
                    <select value={select} onChange={({ target }) => setSelect(target.value)}>
                    <option value="" disabled>Select your tag</option>
                    {tags?.map(tag => (
                        <option key={tag.id} value={tag.name}>{tag.name}</option>
                    ))}
                    </select>
                </div>
                <div className="input">
                    <textarea id="message" name="message" />
                    <Button>Send</Button>
                </div>

            </form>
        </DivCreateCompliment>
    )
}


export default CreateCompliment;