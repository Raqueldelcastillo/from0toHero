import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';


const useKeyPoints = (slideType) => {
  const keyPoints = {
    internet: [
        { text: 'How does Internet work?', Icon: BatteryCharging20Icon },
        { text: 'How do websites work?', Icon: BatteryCharging50Icon },
        { text: 'How to get help when you are stuck?', Icon: BatteryChargingFullIcon },
      ],

    html: [
        { text: 'What is HTML?', Icon: BatteryCharging20Icon },
        { text: 'What is an HTML element?', Icon: BatteryCharging30Icon },
        { text: 'HTML page structure.', Icon: BatteryCharging50Icon },
        { text: 'Basic HTML elements and tags.', Icon: BatteryCharging80Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon },
      ],

    css: [
        { text: 'What is CSS and what it is used for?', Icon: BatteryCharging20Icon },
        { text: 'Understand the basics.', Icon: BatteryCharging30Icon },
        { text: 'Learn layout techniques.', Icon: BatteryCharging50Icon },
        { text: 'Explore CSS properties.', Icon: BatteryCharging60Icon },
        { text: 'Understand specificity and inheritance.', Icon: BatteryCharging80Icon },
        { text: 'Practice responsivness.', Icon: BatteryChargingFullIcon }
    ],

    git: [
        { text: 'What is Github and Git?', Icon: BatteryCharging20Icon },
        { text: 'Benefits of using Git.', Icon: BatteryCharging30Icon },
        { text: 'Install and create GitHub profile.', Icon: BatteryCharging50Icon },
        { text: 'Learn basics of Git.', Icon: BatteryCharging60Icon },
        { text: 'Git workflow.', Icon: BatteryCharging80Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon },
      ],

    javascript: [
        { text: 'What is Javascript?', Icon: BatteryCharging20Icon },
        { text: 'Understand the structure of Javascript.', Icon: BatteryCharging30Icon },
        { text: 'Learn basics of Variables, Functions, Arrays and Objects.', Icon: BatteryCharging50Icon },
        { text: 'Learn basics of Data structures.', Icon: BatteryCharging50Icon },
        { text: 'Learn basics of DOM manipulation.', Icon: BatteryCharging60Icon },
        { text: 'Learn basics of JSON.', Icon: BatteryCharging60Icon },
        { text: 'Learn basics of Web API.', Icon: BatteryCharging80Icon },
        { text: 'Learn basics of how to use NPM with Javascript.', Icon: BatteryCharging90Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon },
      ],
      
      npm: [
        { text: 'What is NPM?', Icon: BatteryCharging20Icon },
        { text: 'What is Node.js?', Icon: BatteryCharging30Icon },
        { text: 'Learn the basics of its Dependencies.', Icon: BatteryCharging50Icon },
        { text: 'How to install and use NPM?', Icon: BatteryCharging60Icon },
        { text: 'Learn using it with Package.json.', Icon: BatteryCharging80Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon }
    ],
    jest: [
        { text: 'Understand the importance of testing.', Icon: BatteryCharging20Icon },
        { text: 'What is Jest?', Icon: BatteryCharging30Icon },
        { text: 'Install and set up Jest.', Icon: BatteryCharging50Icon },
        { text: 'Learn the basics of testing functions.', Icon: BatteryCharging60Icon },
        { text: 'Learn the basics of how to debug the failed test.', Icon: BatteryCharging80Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon }
    ],
    react: [
        { text: 'Why use Frameworks?', Icon: BatteryCharging20Icon },
        { text: 'What is React?', Icon: BatteryCharging30Icon },
        { text: 'Learn the basics of JSX and Virtual DOM.', Icon: BatteryCharging50Icon },
        { text: 'Learn the basics and how to use Components, Props, State, Hooks.', Icon: BatteryCharging60Icon },
        { text: 'Learn the basics and how to use React Router.', Icon: BatteryCharging80Icon },
        { text: 'API calls.', Icon: BatteryCharging90Icon },
        { text: 'Practice!', Icon: BatteryChargingFullIcon }
    ],
  };

  return keyPoints[slideType] || [];
};

export default useKeyPoints;
