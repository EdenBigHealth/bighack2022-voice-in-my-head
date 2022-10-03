import React from "react";

export default function AvatarPicker(props) {
    const avatars = ['zoey', 'wade', 'damian', 'jordan'];
    function updateAvatar(avatar) {
        props.pickAvatar(avatar);
        // fetch(`api/avatar/${avatar}`).then((res) => {
        // });
    }

    return (
        <div className="avatar-picker">
            <label htmlFor="avatar">Pick an Avatar</label>
            <select id="avatar" onChange={(e) => updateAvatar(e.target.value)}>
                {avatars.map((avatar, idx) => {
                    return (<option key={idx}>{avatar}</option>);
                })}
            </select>
        </div>
    );
}