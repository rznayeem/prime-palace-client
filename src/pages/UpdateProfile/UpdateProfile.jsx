import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateProfile = () => {
  const { user, updateUserData, loader } = useContext(AuthContext);
  const [userName, setUserName] = useState(user?.displayName || null);
  const [userPhoto, setUserPhoto] = useState(user?.photoURL || null);
  const [userEmail, setUserEmail] = useState(user?.email || null);

  const handleUpdate = e => {
    e.preventDefault();
    updateUserData(userName, userPhoto);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };
  const handlePhotoChange = e => {
    setUserPhoto(e.target.value);
  };

  return (
    <div>
      <div className="container mx-auto my-10 flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 font-sans shadow-lg">
        <div className="group relative">
          <img
            width={110}
            height={110}
            className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover "
            src={
              user?.photoURL || 'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
            }
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-6 w-2/3">
          <div className="space-y-2 text-sm">
            <label className="block ">Your name</label>
            <input
              type="text"
              name="name"
              onChange={handleNameChange}
              value={userName}
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label className="block ">Photo Url</label>
            <input
              type="text"
              name="photo"
              onChange={handlePhotoChange}
              value={userPhoto}
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label className="block ">Your Email</label>
            <input
              type="email"
              name="email"
              value={userEmail}
              disabled
              className="w-full cursor-not-allowed px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div>
            <button className="w-full rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 hover:scale-95  hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
