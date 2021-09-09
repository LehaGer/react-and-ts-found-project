import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("1st div get drag event");
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("2nd div get drop event");
        setIsDrag(false);
    };

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("2nd div get dragLeave event");
        setIsDrag(false);
    };

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("2nd div get dragOver event");
        e.preventDefault();
        setIsDrag(true)
    };

    return (
        <div>
            <input value={value} type="text" onChange={changeHandler} placeholder={"controlled"}/>
            <input ref={inputRef} type="text" onChange={changeHandler} placeholder={"uncontrolled"}/>
            <button onClick={clickHandler}>someButton</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{width: 200, height: 200, backgroundColor: "blue"}}>
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{width: 200, height: 200, backgroundColor: isDrag ? "red" : "blue", marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample