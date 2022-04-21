import React, { useState, useEffect } from 'react';

const ProfileStatusWiyhHook = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>  {!props.status ? "_____" : props.status} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                        onBlur={deactiveEditMode}
                        value={status}
                        onChange={onStatusChange} />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWiyhHook;