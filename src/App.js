// import data from "./data.json";
// import Jobs from "./components/Jobs";
// import { useState } from "react";
// import Header from "./components/Header";
// import emailjs from 'emailjs-com';
// import Search from "./components/Search";

// function App() {
//   const [filterKeywords, setfilterKeywords] = useState([]);

//   // const setSearchKeyword = (data) => {
//   //   setfilterKeywords(data);
//   // };

//   const addFilterKeywords = (data) => {
//     if (!filterKeywords.includes(data)) {
//       setfilterKeywords([...filterKeywords, data]);
//     }
//   };

//   const deleteKeyword = (data) => {
//     const newKeywords = filterKeywords.filter((key) => key !== data);
//     setfilterKeywords(newKeywords);
//   };

//   const clearAll = () => {
//     setfilterKeywords([]);
//   };
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState('');
//   const [resume, setResume] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleResumeChange = (e) => {
//     setResume(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       user_email: email,
//       user_resume: resume,
//     };

//     emailjs.send('service_5uqlkcn', 'template_6w83ojw', templateParams, 'xvBKlQ7xGHzzy-oOM')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Email sent successfully!');
//         setEmail('');
//         setResume('');
//       }, (err) => {
//         console.error('FAILED...', err);
//         alert('Failed to send email.');
//       });
//   };

//   return (
//     <div>
//       <div className="header"></div>

//       {/* <Search setSearchKeyword={setSearchKeyword} /> */}

//       {filterKeywords.length > 0 && (
//         <Header
//           keywords={filterKeywords}
//           removeKeywords={deleteKeyword}
//           clearAll={clearAll}
//         />
//       )}

// <Jobs
//         keywords={filterKeywords}
//         data={data}
//         setKeywords={addFilterKeywords}
//       />

// <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//         <textarea
//           placeholder="Enter your resume"
//           value={resume}
//           onChange={handleResumeChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
import data from "./data.json";
import Jobs from "./components/Jobs";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import emailjs from 'emailjs-com';


function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const handleRedirectClick = () => {
    window.location.href = 'https://test0212.zeabur.app/'; // Replace with the URL you want to redirect to
  };
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

    const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      user_resume: resume,
    };

    emailjs.send('service_5uqlkcn', 'template_6w83ojw', templateParams, 'xvBKlQ7xGHzzy-oOM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        setEmail('');
        setResume('');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Failed to send email.');
      });
  };


  return (
    <div>
      <div className="header"></div>


      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />

<form className="centered-form" onSubmit={handleSubmit}>
<input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className="email-input"
        />
           <textarea
          type="email"
          placeholder="Enter which job you want to apply we will connect with you soon"
          value={resume}
          onChange={handleResumeChange}
          required
        />
        <button type="submit" className="submit-button">Submit</button>

        <button onClick={handleRedirectClick} className="redirect-button">
        back to home Website
      </button>
      </form>
    </div>
  );
}

export default App;