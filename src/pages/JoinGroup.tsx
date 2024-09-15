// import React, { useState } from "react";
// import { useMutation, useQuery } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuCheckboxItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// interface User {
//   _id: string;
//   name: string;
//   clerkID: string;
// }

// const JoinGroup: React.FC = () => {
//   const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

//   const users = useQuery(api.myFunctions.listUsers);
//   const addFriend = useMutation(api.myFunctions.addFriend);

//   const toggleUserSelection = (userId: string) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(userId)
//         ? prevSelected.filter((id) => id !== userId)
//         : [...prevSelected, userId]
//     );
//   };

//   const handleJoinGroup = () => {
//     selectedUsers.forEach((userId) => {
//       const user = users?.find((u) => u._id === userId);
//       if (user) {
//         addFriend({ name: user.name, clerkID: user.clerkID });
//       }
//     });
//     setSelectedUsers([]);
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="default">Join Group</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Select Users to Join</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {users?.map((user: User) => (
//           <DropdownMenuCheckboxItem
//             key={user._id}
//             checked={selectedUsers.includes(user._id)}
//             onCheckedChange={() => toggleUserSelection(user._id)}
//           >
//             {user.name}
//           </DropdownMenuCheckboxItem>
//         ))}
//         <DropdownMenuSeparator />
//         <Button
//           className="w-full mt-2"
//           onClick={handleJoinGroup}
//           disabled={selectedUsers.length === 0}
//         >
//           Join Group
//         </Button>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default JoinGroup;

import React, { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface User {
  _id: string;
  name: string;
  clerkID: string;
}

const JoinGroup: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [addedFriends, setAddedFriends] = useState<User[]>([]); // Store added friends

  const users = useQuery(api.myFunctions.listUsers);
  const addFriend = useMutation(api.myFunctions.addFriend);

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleJoinGroup = async () => {
    const newlyAddedFriends: User[] = [];

    // Loop through selected users, add each to the group, and store them in the array
    for (const userId of selectedUsers) {
      const user = users?.find((u) => u._id === userId);
      if (user) {
        await addFriend({ name: user.name, clerkID: user.clerkID });
        newlyAddedFriends.push(user); // Add user to newly added friends
      }
    }

    // Update the addedFriends state to display the added users
    setAddedFriends((prevFriends) => [...prevFriends, ...newlyAddedFriends]);
    setSelectedUsers([]); // Clear selected users after adding
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default">Add Friends</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Users to Add</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {users?.map((user: User) => (
            <DropdownMenuCheckboxItem
              key={user._id}
              checked={selectedUsers.includes(user._id)}
              onCheckedChange={() => toggleUserSelection(user._id)}
            >
              {user.name}
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <Button
            className="w-full mt-2"
            onClick={handleJoinGroup}
            disabled={selectedUsers.length === 0}
          >
            Join Group
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Display added friends */}
      {addedFriends.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Friends Added:</h2>
          <ul>
            {addedFriends.map((friend) => (
              <li key={friend._id}>{friend.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JoinGroup;
