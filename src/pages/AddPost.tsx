import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Select from "../components/ui/Select";
import TinyEditor from "../components/ui/TinyEditor";

const AddPost = () => {
  return (
    <section className="global-padding pt-32 max-w-3xl mx-auto w-full">
      <h1 className="text-lg font-medium mb-3">Post Your Blog</h1>

      <form className="flex flex-col gap-4 mb-10">
        {/* Input Field Title */}
        <div className="flex flex-col space-y-1">
          <Label htmlFor="title" labelText="Title" />
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter your blog title..."
          />
        </div>

        {/* Input Field Image */}
        <div className="flex flex-col space-y-1">
          <Label htmlFor="image" labelText="Cover Image" />
          <Input
            id="image"
            name="image"
            type="file"
            placeholder="Enter your blog title..."
          />
        </div>

        {/* Input Field Category */}
        <div className="flex flex-col space-y-1">
          <Label htmlFor="category" labelText="Select Category" />
          <Select id="category" name="category">
            <option value="technology" selected>
              Technology
            </option>
            <option value="science">Science</option>
          </Select>
        </div>

        {/* Input Field Blog Content */}
        <div className="flex flex-col space-y-1">
          <Label htmlFor="blog-content" labelText="What's on your mind" />
          <TinyEditor />
        </div>

        {/* Input Field Blog Content */}
        <div className="flex flex-col space-y-1">
          <button
            type="submit"
            className="w-full bg-accent py-2 rounded-md text-lg font-medium duration-200 cursor-pointer hover:bg-accent/90 hover:shadow-sm hover:shadow-primary/20"
          >
            Submit Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPost;
