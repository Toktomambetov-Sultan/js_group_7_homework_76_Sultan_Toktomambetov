const { nanoid } = require("nanoid");

const fs = require("fs").promises;
const fileName = "./DB.json";
const readFile = async () => {
  return (await fs.readFile(fileName)).toJSON();
};
const writeFile = async (content) => {
    await fs.writeFile(fileName, content); 
};

module.exports = {
  async write(message) {
      const obj=await readFile();
      obj.push({...message, id: nanoid()}); 
      await writeFile(obj);
  },
  async get() {
      return await readFile();
  },
};
