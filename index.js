import inquirer from "inquirer";
// class Person {
//   userName: string;
//   personality: string;
//   constructor(userName: string, personality: string) {
//     this.userName = userName;
//     this.personality = personality;
//   }
//   updatePersonality(newPersonality: string) {
//     this.personality = newPersonality;
//   }
// }
// class PerOutput {
//   persons: Person[] = [];
//   addPerson(person: Person) {
//     this.persons.push(person);
//   }
//   listPersons() {
//     this.persons.forEach((person) => {
//       console.log(
//         `Name: ${person.userName},Personality: ${person.personality}`
//       );
//     });
//   }
// }
// const myData = new PerOutput();
async function getPersonalityInput() {
    const answer = await inquirer.prompt([
        {
            name: "numberKey",
            type: "input",
            message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself!",
            validate: (input) => {
                if (input === "1" || input === "2") {
                    return true;
                }
                return "Please enter 1 or 2";
            },
        },
    ]);
    return answer.numberKey === "1" ? "Extravert" : "Introvert";
}
// async function getNameInput(): Promise<string> {
//   const answers = await inquirer.prompt([
//     {
//       name: "nameKey",
//       type: "input",
//       message: "Enter Your Good Name Here:",
//       validate: (input: string) => {
//         if (input.trim() === "") {
//           return "Name cannot be empty";
//         }
//         return true;
//       },
//     },
//   ]);
//   return answers.nameKey.trim();
// }
// async function perInput(data: PerOutput) {
//   try {
//     console.log("Welcome to Personality Checker Project");
//     const personality = await getPersonalityInput();
//     console.log(chalk.green.italic(`You are: ${personality}`));
//     const name = await getNameInput();
//     console.log(
//       chalk.blue(
//         `Thank you, ${name}. Your personality has been recorded as ${personality}.`
//       )
//     );
//     const newPerson = new Person(name, personality);
//     data.addPerson(newPerson);
//   } catch (error) {
//     console.error(
//       chalk.red("An error occurred while processing your input."),
//       error
//     );
//   }
// }
// perInput(myData).then(() => {
//   console.log(chalk.yellow("Current list of people:"));
//   myData.listPersons();
// });
