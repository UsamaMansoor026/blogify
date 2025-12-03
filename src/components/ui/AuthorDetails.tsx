import { users, type UserInterface } from "../../assets";

const AuthorDetails = ({ authorId }: { authorId: string }) => {
  const authorDetail: UserInterface | undefined = users.find(
    (user) => user.id === authorId
  );

  if (authorDetail) {
    return (
      <div className="flex items-center gap-2 p-3">
        <img
          src={authorDetail.avatar_url}
          alt={authorDetail.username}
          className="w-10 h-10 object-cover rounded-full"
        />
        <h2 className="text-secondary">{authorDetail.username}</h2>
      </div>
    );
  }
};

export default AuthorDetails;
