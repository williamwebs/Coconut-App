import styles from "./list.module.css";

const CreateList = ({ name }) => {
  return (
    <div className="w-full font-league">
      <h3 className="font-bold font-league text-center text-black w-full text-lg my-2">
        {name} List
      </h3>

      <form>
        <div className="flex flex-col justify-between gap-2 w-full mb-5">
          <div className="w-full">
            <label htmlFor="producttitle" className={styles.label}>
              Product Title
            </label>
            <input type="text" className={styles.inputField} />
          </div>
          <div className="w-full">
            <label htmlFor="price" className={styles.label}>
              Price
            </label>
            <input type="number" className={styles.inputField} />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 w-full mb-5">
          <div className="w-full">
            <label htmlFor="note" className={styles.label}>
              Short Note
            </label>
            <textarea
              name="note"
              id="note"
              className={styles.textArea}
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="image" className={styles.label}>
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className={styles.imageField}
            />
          </div>
        </div>

        <div className="mt-5 mx-auto">
          <button className="primary_btn w-full">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateList;
