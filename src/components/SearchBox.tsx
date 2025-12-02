import Input from "./ui/Input";
import Label from "./ui/Label";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="max-w-lg mx-auto relative">
      <Label htmlFor="search" labelText="Search Posts" />
      <Input
        id="search"
        name="search"
        type="text"
        autoComplete={false}
        placeholder="Enter post title..."
      />
      <Search size={20} className="absolute bottom-2.5 right-3 text-accent" />
    </div>
  );
};

export default SearchBox;
