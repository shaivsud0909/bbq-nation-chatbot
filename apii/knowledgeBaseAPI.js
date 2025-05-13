  const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/knowledge', (req, res) => {
  const { question } = req.body;

  
switch (question.toLowerCase()) {
  case 'what is bbq nation?':
    answer = 'BBQ Nation is a casual dining restaurant chain in India known for its grilled foods, especially the concept of live grills embedded in dining tables.';
    break;
  case 'what is your signature dish?':
    answer = 'Our signature dishes include a wide variety of grilled vegetarian and non-vegetarian skewers, such as paneer tikka, chicken tikka, and prawns.';
    break;
  case 'do you have vegetarian options?':
    answer = 'Yes, we have a variety of vegetarian options including grilled paneer, mushrooms, and an assortment of salads and main course dishes.';
    break;
  case 'what are your hours?':
    answer = 'We are open from 12 PM to 11 PM, every day.';
    break;
  case 'where are you located?':
    answer = 'We are located in multiple cities across India. You can check our website for the nearest outlet.';
    break;
  case 'do you offer home delivery?':
    answer = 'Yes, we offer home delivery through our website and popular food delivery apps.';
    break;
  case 'is there a buffet option?':
    answer = 'Yes, we offer an all-you-can-eat buffet with a wide variety of starters, main courses, and desserts.';
    break;
  case 'do you have desserts?':
    answer = 'Yes, our buffet includes a wide range of desserts like gulab jamun, brownies, ice cream, and pastries.';
    break;
  case 'how do i make a reservation?':
    answer = 'You can make a reservation through our website or by calling your nearest BBQ Nation outlet.';
    break;
  case 'do you host birthday parties?':
    answer = 'Yes, we host birthday parties and special occasions with customizable packages.';
    break;
  default:
    answer = `I'm not sure about that. You asked: "${question}"`;
}


  res.json({ answer });
});

app.listen(3000, () => {
  console.log('Knowledge Base API running on port 3000');
});
