import React from 'react'
import './CriteriaRating.css'
import { useState, useCallback } from 'react';

const CriteriaRating = ({criteriaName, studentName}) => {
  const [ratedFlag, setRatedFlag] = useState(false);
  const [chosenRating, setChosenRating] = useState([]);
  const [userText, setUserText] = useState("");
  const [userText2, setUserText2] = useState("");
  const rating = {1: 'Excellent', 2: 'Good', 3: 'Improve', 4: 'NIL'};
  const missingIntro = {1: "WOW sentence for an emotion", 2: "Explanation of Emotion", 3: "Sound/Senses phrase", 4: "Why was your MC there", 5: "Hook"};
  const missingSuperSus = {1: "Shock", 2: "Realisation", 3: "Strong emotion", 4: "Dilemma (next paragraph)"};
  
  const handleClick = (rate) => {
    localStorage.setItem(criteriaName, rate);
    setRatedFlag(true);
    setChosenRating(Number(rate[0]));
  }
  const handleIntro = (value) => {
    let textToCopy = "";
    if(chosenRating === 2) {
      textToCopy = `Good attempt at using the EESWH Introduction here, ${studentName}! However, you are missing: ${value[1]}`;
      if(value[0] === "5") {
        textToCopy += "Do make sure to immediately answer the hook (what caught your attention) in your next paragraph.";
      }
    }
    else if(chosenRating === 3) {
      textToCopy = `Let's improve this introduction using the EESWH technique! ${value[1]}\n`;
      if(Number(value[0]) === 1) {
        textToCopy += "Emotion: Waves of jubilation washed over me.\nI was overwhelmed with anxiety.\nI trembled like a flame blown by the wind";
      }
      else if(value[0] === "3") {
        textToCopy += "Sound/Senses: \nx A hive of activity\nx A sea of people\nx As noisy as a school playground during recess\nx As quiet as a deserted road\nx Bustling with people";
      }
    }
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
  }
  const handleSuperSus = (value) => {
    let textToCopy = "";
  }
  const userInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const handleCopy = (num) => {
    let textToCopy = "";
    if (criteriaName === "WOWFATB") {
      if (num === 1) {
        textToCopy = `Excellent use of WOWFATB(s) for ${userText}`;
      } else if (num === 2) {
        textToCopy = `Good attempt at using the WOWFATB(s) for ${userText}! However, we can add more phrases!. A better emotion to have here would be ${userText2}. Let's use some phrases for that.`;
      } else if (num === 3) {
        textToCopy = `This is a great opportunity to use the WOWFATB(s) for ${userText}`;
      }
    }
    else if (criteriaName === "Intro") {

    }
    else if (criteriaName === "FlashBackIntro") {
      if (num === 1) {
        textToCopy = `Excellent Flashback Introduction, ${studentName}`;
      } else if (num === 2) {
        textToCopy = `Good attempt at the Flashback Introduction, ${studentName}! However, you need to mention ${userText}`;
      } else if (num === 3) {
        textToCopy = `Let's improve this Flashback by adding in ${userText}`;
      }
    }
    else if (criteriaName === "ColorChar") {
      if (num === 1) {
        textToCopy = "Excellent use of Colourful Characterisation here NAME!";
      }
      else if (num === 2) {
        textToCopy = `Good attempt to use Colourful Characterisation here, NAME! However, let's add more about this 
        character's physical appearance so your reader can imagine what the character looks like. Are they a likeable or 
        unlikeable type of character? Could their appearance reflect this?`;
      } else if (num === 3) {
        textToCopy = `Let's use some Colourful Characterisation here to show how intimidating X is. This allows your reader 
        to imagine what the character looks like.`;
      }
      else if (num === 4) {
        textToCopy = `The dilemma technique is always followed by a trigger + active decision! Let's rephrase this section 
        and use some good words and phrases! Let's give your MC some strong emotion here! This part happens too fast and 
        is unrealistic ${userText} While this part makes sense, this seems to go by too fast because we do not see any of MC's emotions!(AER/SNT)`;
      }
    }
    else if (criteriaName === "Trigger") {
      if (num === 1) {
        textToCopy = "Excellent job remembering to follow up the dilemma with a trigger + decision!";
      } 
      else if (num === 2) {
        textToCopy = `Good attempt at the trigger / decision! However, rather than remembering wise words (as there is not
        much of a lesson to learn here), let's use alt technique! Would this be a logical decision for the MC to
        make? Always mention what was MC's trigger to make their decision. Maybe they saw something or remembered
        wise words/a thought!
        1) In the midst of the merciless battle in my head, I remembered my X's wise words
        2) In the midst of the merciless battle in my head, I caught sight of a X
        3) In the midst of the merciless battle in my head, a thought occurred to me.
        Always mention what was MC's active decision to end their dilemma.
        1) I then took a deep, resolved breath, making up my mind to (decision)`;
      } 
      else if (num === 3) {
        textToCopy = "Let's remember to mention the MC's trigger / active decision!";
      } 
      else if (num === 4) {
        textToCopy = "The dilemma technique is always followed by a trigger + active decision! MC might have seen something, remembered wise words, or had a thought! Then, remember to state what they have decided to do clearly.";
      }
    }
    else if (criteriaName === "DilemmaTech") {
      let pointsToAddOn = "\n1) Instantly, a tug of war ensued in my mind.\n2) Should I (Option one) or should I (Option two)?\n3) If I (Option one), (explain what will/may happen)\n4) However, if I (Option two), (explain what will/may happen)\n5) I was trapped in a dilemma and had to choose between the devil and the deep blue sea.";
      if (num === 1) {
        textToCopy = `Perfect application of the Dilemma Technique, ${studentName}!`;
      } 
      else if (num === 2) {
        textToCopy = `Good attempt at the Dilemma Technique, ${studentName}! However, remember to use an idiom to show your MC has a dilemma.
        It does not tell us exactly what option #1/#2 was. Let's give the MC a stronger reason to want to (?) However, some points are not in the right order and some
        phrasing can be improved. However, you are missing these points: `;
        textToCopy += pointsToAddOn;
      } else if (num === 3) {
        textToCopy = "Let's improve this Dilemma Technique by adding on these sentences: ";
        textToCopy += pointsToAddOn;
      } else if (num === 4) {
        textToCopy = "This is a good place to use the Dilemma Technique! Remember, your dilemma should always lead to two negative outcomes, which is why it's so hard for your MC to make a decision! Let's add these 5 sentences to craft your MC's dilemma: ";
        textToCopy += pointsToAddOn;
      }
    }
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
  };
  const goBackSamePage = () => {
    setRatedFlag(false);
  }

  return (
    <>
      {!ratedFlag ? (
        <>
          <button onClick={() => history.back()}>Back</button>
          <ul>
            {Object.entries(rating).map((rate) => (
              <li key={rate[0]} onClick={() => handleClick(rate)}>{rate[0]} {rate[1]}</li>
            ))}
          </ul>
        </>
      ) : (
        criteriaName === "WOWFATB" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
          {chosenRating === 1 ? (
            <>Excellent use of WOWFATB(s) for <input
                className="userTypes1"
                type="text"
                value={userText}
                onChange={(e) => {setUserText(e.target.value)}}
                ref={userInput}
                style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
              />
            </>
          ) : chosenRating === 2 ? (
            <>Good attempt at using the WOWFATB(s) for <input
                className="userTypes2"
                type="text"
                value={userText}
                onChange={(e) => {setUserText(e.target.value)}}
                ref={userInput}
                style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
              /> ! However, we can add more phrases!. A better emotion to have here would be <input
                className="userTypes2"
                type="text"
                value={userText2}
                onChange={(e) => {setUserText2(e.target.value)}}
                style={{ width: `${userText2.replace(/ /g, '').length + 1}ch` }}
              />. Let's use some phrases for that.
            </>
          ) : chosenRating === 3 ? (
            <>This is a great opportunity to use the WOWFATB(s) for <input
                className="userTypes1"
                type="text"
                value={userText}
                onChange={(e) => {setUserText(e.target.value)}}
                ref={userInput}
                style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
              />
            </>
          ) : null}
          <br />
          <button onClick={handleCopy(chosenRating)}>Copy</button>
          </>
        ) : criteriaName === "Intro" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
            {chosenRating === 1 ? (
              <>Excellent work here, {studentName}! You crafted an engaging introduction using the EESWH technique.</>
            ) : chosenRating === 2 ? (
              <>Good attempt at using the EESWH Introduction here, {studentName}! However, you are missing:
              <br />
              {Object.entries(missingIntro).map((value) => (
                <li key={value[0]} onClick={() => handleIntro(value)}>{value[0]}) {value[1]}</li>
              ))}
              </>
            ) : chosenRating === 3 ? (
              <>Let's improve this introduction using the EESWH technique!
              {Object.entries(missingIntro).map((value) => (
                <li key={value[0]} onClick={() => handleIntro(value)}>{value[0]}) {value[1]}</li>
              ))}
              </>
            ) : null}
            <br />
            <button onClick={handleIntro(chosenRating)}>Copy</button>
            </>
        ) : criteriaName === "FlashBackIntro" ? (
        <>
        <button onClick={() => goBackSamePage()}>Back</button><br />
        {chosenRating === 1 ? (
          <>Excellent Flashback Introduction, {studentName}</>
        ) : chosenRating === 2 ? (
          <>Good attempt at the Flashback Introduction, {studentName}! However, you need to mention <input
              className="userTypes1"
              type="text"
              value={userText}
              onChange={(e) => {setUserText(e.target.value)}}
              ref={userInput}
              style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
            />
          </>
        ) : chosenRating === 3 ? (
          <>Let's improve this Flashback by adding in <input
              className="userTypes1"
              type="text"
              value={userText}
              onChange={(e) => {setUserText(e.target.value)}}
              ref={userInput}
              style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
            />
          </>
        ) : null}
        <br />
        <button onClick={handleCopy(chosenRating)}>Copy</button>
        </>
        ) : criteriaName === "SuperSus" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
          {chosenRating === 1 ? (
            <>Excellent application of the Super Suspense format, ${studentName}!</>
          ) : chosenRating === 2 ? (
            <>Good attempt at the Super Suspense format ${studentName}! However, you are missing
            {Object.entries(missingSuperSus).map((value) => (
              <li key={value[0]} onClick={() => handleSuperSus(value)}>{value[0]}) {value[1]}</li>
            ))}
            <br />
            </>
          ) : chosenRating === 3 ? (
            <>Let's improve this Super Suspense format by including these key parts:
            <br />
            {Object.entries(missingSuperSus).map((value) => (
              <li key={value[0]} onClick={() => handleSuperSus(value)}>{value[0]}) {value[1]}</li>
            ))}
            </>
          ) : null}
          <br />
          <button onClick={handleCopy(chosenRating)}>Copy</button>
          </>
        ) : criteriaName === "ColorChar" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
          {chosenRating === 1 ? (
            <>Excellent use of Colourful Characterisation here {studentName}!</>
          ) : chosenRating === 2 ? (
            <>Good attempt to use Colourful Characterisation here, {studentName}! However, let's add more about this
            character's physical appearance so your reader can imagine what the character looks like. Are they
            a likeable or unlikeable type of character? Could their appearance reflect this?</>
          ) : chosenRating === 3 ? (
            <>Let's use some Colourful Characterisation here to show how intimidating X is. This allows your
            reader to imagine what the character looks like.</>
          ) : chosenRating === 4 ? (
            <>The dilemma technique is always followed by a trigger + active decision! Let's rephrase this 
            sectionand use some good words and phrases! Let's give your MC some strong emotion here! This part
            happens too fast and is unrealistic <input
              className="userTypes1"
              type="text"
              value={userText}
              onChange={(e) => {setUserText(e.target.value)}}
              ref={userInput}
              style={{ width: `${userText.replace(/ /g, '').length + 1}ch` }}
            /> While this part makes sense, this seems to go by too fast because we do not see any of MC's 
            emotions!(AER/SNT)</>
          ) : null}
          <br />
          <button onClick={handleCopy(chosenRating)}>Copy</button>
          </>
        ) : criteriaName === "Trigger" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
          {chosenRating === 1 ? (
            <>Excellent job remembering to follow up the dilemma with a trigger + decision!</>
          ) : chosenRating === 2 ? (
            <>Good attempt at the <u>trigger / decision</u>! However, rather than remembering wise words (as there is not 
            much of a lesson to learn here), let's use <u>alt technique</u>! Would this be a logical decision for the MC to
            make? Always mention what was MC's trigger to make their decision. Maybe they saw something or remembered 
            wise words/a thought!<br/>
            1) In the midst of the merciless battle in my head, I remembered my X's wise words<br/>
            2) In the midst of the merciless battle in my head, I caught sight of a X <br/>
            3) In the midst of the merciless battle in my head, a thought occured to me.<br/>
            Always mention what was MC's active decision to end their dilemma. <br/>
            1) I then took a deep, resolved breath, making up my mind to (decision)</>
          ) : chosenRating === 3 ? (
            <>Let's remember to mention the MC's <u>trigger / active decision</u>!</>
          ) : chosenRating === 4 ? (
            <>The dilemma technique is always followed by a trigger + active decision! MC might have seen something, remembered
            wise words, or had a thought! Then, remember to state what they have decided to do clearly.</>
          ) : null}
          <br />
          <button onClick={handleCopy(chosenRating)}>Copy</button>
          </>
        ) : criteriaName === "DilemmaTech" ? (
          <>
          <button onClick={() => goBackSamePage()}>Back</button><br />
          {chosenRating === 1 ? (
            <>Perfect application of the Dilemma Technique, {studentName}!</>
          ) : chosenRating === 2 ? (
            <>Good attempt at the Dilemma Technique, {studentName}! However, remember to use an idiom to show your MC has a dilemma. 
            It does not tell us exactly what option #1/#2 was. Let's give the MC a stronger reason to want to (?) However, some points are not in the right order and some
              phrasing can be improved. However, you are missing these points:<br />
              1) Instantly, a tug of war ensued in my mind.<br />
              2) Should I (Option one) or should I (Option two)?<br />
              3) If I (Option one), (explain what will/may happen)<br />
              4) However, if I (Option two), (explain what will/may happen)<br />
              5) I was trapped in a dilemma and had to choose between the devil and the deep blue sea.</>
          ) : chosenRating === 3 ? (
            <>Let's improve this Dilemma Technique by adding on these sentences:<br />
            1) Instantly, a tug of war ensued in my mind.<br />
            2) Should I (Option one) or should I (Option two)?<br />
            3) If I (Option one), (explain what will/may happen)<br />
            4) However, if I (Option two), (explain what will/may happen)<br />
            5) I was trapped in a dilemma and had to choose between the devil and the deep blue sea.
            </>
          ) : chosenRating === 4 ? (
            <>This is a good place to use the Dilemma Technique! Remember, your dilemma should always lead to two negative
            outcomes, which is why it's so hard for your MC to make a decision! Let's add these 5 sentences to craft your 
            MC's dilemma:<br />
            1) Instantly, a tug of war ensued in my mind.<br />
            2) Should I (Option one) or should I (Option two)?<br />
            3) If I (Option one), (explain what will/may happen)<br />
            4) However, if I (Option two), (explain what will/may happen)<br />
            5) I was trapped in a dilemma and had to choose between the devil and the deep blue sea.
              </>
          ) : null}
          <br />
          <button onClick={handleCopy(chosenRating)}>Copy</button>
          </>
      ) : null
      )}
    </>
  )
}

export default CriteriaRating;