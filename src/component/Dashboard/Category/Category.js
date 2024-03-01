import "./Category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Skills</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Web Developer"
          title="Web Developer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Developer"
          title="Developer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="AI/ML Developer"
          title="AI/ML Developer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cloud computing"
          title="Cloud Computing"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
