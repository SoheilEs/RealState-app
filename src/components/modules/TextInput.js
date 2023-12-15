import styles from "@/modules/TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";
function TextInput({
  name,
  title,
  addAddsData,
  setAddAdsData,
  textarea = false,
}) {
  const chanageHandler = (e) => {
    const {name, value} = e.target
    setAddAdsData({
        ...addAddsData,
        [name]: p2e(value)
    });
  };
  return (
    <div className={styles.container}>
      <p>{title} :</p>
      {textarea ? (
        <textarea 
          type="text"
          name={name}
          value={addAddsData[name]}
          onChange={chanageHandler}
         />
      ) : (
        <input
          type="text"
          name={name}
          value={addAddsData[name]}
          onChange={chanageHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
