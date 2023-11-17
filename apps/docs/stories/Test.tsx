import React from 'react';

export type TestProps =   {
    /** The name of the test */
    name: string;
    /** The value of the test */
    value: string;
    /** A boolean indicating whether the test is active or not */
    bool: boolean;
    /** A prop that can be null or a number */
    prop1: string | null | number;
}

/**
 *
 * Test component description
 */
export const Test  = ({name, value, bool=false, prop1}: TestProps) => {

    return (
        <div>
            <div>{name}</div>
            <div>{value}</div>
            <div>{bool}</div>
            <div>{prop1}</div>
        </div>
    )
}
