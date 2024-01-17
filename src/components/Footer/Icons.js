import React from 'react';
import { Icon } from '@iconify/react';

export default function Icons(props)
{
    return (
        <Icon icon={props.name} className='mx-2'/>
    );
}