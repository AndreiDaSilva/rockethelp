import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
import React from 'react';

type Props =  IButtonProps & {
    title: string;

}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase 
        bg="green.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{
            bg: "green.500"
        }}
        {...rest}
        >
            <Heading
            color="#fff"
            fontSize="sm"
            >
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}