<img width="319" alt="Screenshot 2024-06-02 at 16 54 44" src="https://github.com/DannyTet/rn-assignment3-11162518/assets/150481106/f574a50b-c629-4c6f-86d1-9d48c863d0bc">![image](https://github.com/DannyTet/rn-assignment3-11162518/assets/150481106/8a94ba1f-0286-4678-a06c-31718c7c3106)# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

#rn-assignments3-11162518
React Native Task Management App
Overview
This is a React Native task management application that allows users to manage and categorize their tasks. The app includes features for adding, viewing, and managing tasks across different categories.

Table of Contents
Overview
Features
Installation
Usage
Screenshots
Components
Contributing
License
Contact
Features
View a list of tasks
Add new tasks
Categorize tasks into predefined categories
View tasks by category
Installation
Prerequisites
Node.js and npm: Install Node.js
React Native CLI: npm install -g react-native-cli
Git: Install Git
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/rn-assignment3-1129884.git
cd rn-assignment3-1129884
Install the dependencies:

bash
Copy code
npm install
Run the application:

For iOS:
bash
Copy code
npx react-native run-ios
For Android:
bash
Copy code
npx react-native run-android
Usage
Open the app on your emulator or physical device.
Navigate through the app to view tasks by category.
Add new tasks using the provided interface.
Screenshots
Include screenshots of your app to showcase its features and UI.

Components
App Component
The main component of the application that sets up the state and renders the UI.

Usage:

js
Copy code
import App from './App';
Header
A header component that displays a greeting and the user's image.

Usage:

js
Copy code
<View style={styles.header}>
  <Text style={styles.headerText}> Hello, Devs </Text>
  <View style={styles.ellipse}>
    <Image source={require('./userimage.png')} style={styles.userImage} />
  </View>
</View>
Search Bar
A search bar component for searching tasks.

Usage:

js
Copy code
<View style={styles.searchFlexView}>
  <TextInput
    style={styles.searchInput}
    placeholder={'Search...'}
  />
  <Button title="Sort" style={styles.sortButton} />
</View>
Category List
A horizontal FlatList component that displays task categories.

Props:

data (array): An array of category objects with id, title, and image properties.
renderItem (function): A function that renders each item in the list.
keyExtractor (function): A function that extracts the key for each item.
Usage:

js
Copy code
<FlatList
  horizontal
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.scrollContainer}
  showsHorizontalScrollIndicator={false}
/>
Task List
A ScrollView component that displays ongoing tasks.

Props:

task (array): An array of task objects with name and key properties.
Usage:

js
Copy code
<ScrollView style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
  {task.map((item2) => (
    <View key={item2.key}>
      <Text style={styles.item2}>{item2.name}</Text>
    </View>
  ))}
</ScrollView>
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Created by Your Name - feel free to contact me!

markdown
Copy code

### Explanation of the Components Section

- **App Component**: The main component that manages the state and renders the entire UI.
- **Header**: Displays a greeting message and the user's image at the top of the screen.
- **Search Bar**: Allows users to search for tasks and includes a button to sort them.
- **Category List**: A horizontal list of task categories, each displayed with an image and title.
- **Task List**: Displays a list of ongoing tasks in a scrollable view.

This `README.md` provides a clear and detailed description of the project's components, installation instructions, usage, and other relevant information. You can customize and expand this template based on the specific details and requirements of your project.



<img width="319" alt="Screenshot 2024-06-02 at 16 54 44" src="https://github.com/DannyTet/rn-assignment3-11162518/assets/150481106/27c30efb-67b7-4050-bab7-32fb2643e0b1">























