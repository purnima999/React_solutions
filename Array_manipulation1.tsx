import React, { useState } from 'react';

const LabWaitingTimeViewParent: React.FC = () => {
    const data = [
        {
            id: 1, name: "purnima", age: 20, height: 5
        },
        {
            id: 2, name: "kavya", age: 10, height: 3
        },
        {
            id: 3, name: "kanak", age: 11, height: 2
        },
        {
            id: 4, name: "Prachi", age: 1, height: 2
        },
        {
            id: 5, name: "Neha", age: 13, height: 2
        },
        {
            id: 6, name: "Ekta", age: 3, height: 2
        },
        {
            id: 7, name: "Mansi", age: 15, height: 2
        }
    ];

    let chunkedData: any[] = [];
    let ageValues: any[] = [];
    let result;
    const chunkSize = 2;
    const objChunks = () => {
        for (let i = 0; i < data.length; i += chunkSize) {
            const chunks = data?.slice(i, i + chunkSize);
            chunkedData?.push(chunks)
        }
        chunkedData.map((x) => {
            x.reduce((acc, item) => {
                const ageVal = acc.age + item.age;
                ageValues.push(ageVal);
                let sum = 0;
                result = ageValues?.map((x) => sum += x);
                return result
            });
        })
    };
    objChunks();
    console.log("final_data", { ageValues, result });
    return (
        <>
            
        </>
    )
}

export default React.memo(LabWaitingTimeViewParent);
