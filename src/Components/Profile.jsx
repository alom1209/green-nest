import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Profile = () => {
    const{user,setUser}=useContext(AuthContext)
    const[editing,setEditing]=useState(false)
    const[name,setName]=useState("");
    const[photo,setPhoto]=useState("");
    const[message,setMessage]=useState('')
    const auth=getAuth()
     const handleUpdateProfile = () => {
    if (!name && !photo) {
      toast.error("Please fill out both fields!");
      return;
    }
    const updates={}
    if(name) updates.displayName=name
    if(photo) updates.photoURL=photo
    updateProfile(auth.currentUser,updates)
      .then(() => {
        setUser({ ...user,  displayName: name || user.displayName,
        photoURL: photo || user.photoURL});
        setName('')
        setPhoto('')
        setEditing(false)
        toast.success("✅ Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("❌ " + error.message);
      });
  };

    return (
        <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-5">My Profile</h2>

      <div className="card w-96 bg-base-200 shadow-xl p-6 text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/default-user.png"}
          alt="user"
          className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
        />
        <h3 className="text-lg font-medium mb-1">{user?.displayName}</h3>
        <h3 className="text-lg font-medium mb-1">{user?.email}</h3>

       {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="btn btn-neutral w-full"
          >
            Update Profile
          </button>
        ) : (
          <div className="mt-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter new photo URL"
              className="input input-bordered w-full mb-3"
            />
            <div className="flex gap-2">
              <button
                onClick={handleUpdateProfile}
                className="btn btn-primary flex-1"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setMessage("");
                }}
                className="btn btn-outline flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        )}


        {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
      </div>
    </div>
    );
};

export default Profile;