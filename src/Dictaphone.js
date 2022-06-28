<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, logout } from "./firebase-config";

import { query, collection, getDocs,  updateDoc, where, doc, arrayUnion } from 'firebase/firestore';


// import { PushToTalkButton, BigTranscript, PushToTalkButtonContainer } from "@speechly/react-ui";
// import { useSpeechContext } from '@speechly/react-client';

const appId = '762a5828-6832-4887-b58d-ee0a77ff6448';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  // const { segment } = useSpeechContext();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
      setMessages(data.messages);
    } catch (err) {
      fetchUserName();
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName();
  },[loading, user]);

  const {
    transcript,
    listening,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const addMessage = async (id, newMessage) => {

    const q = query(collection(db, "users"), where("uid", "==", id));
    const docRef = await getDocs(q);

    const doccy = doc(db, "users", docRef.docs[0].id);

    await updateDoc(doccy, {
      messages: arrayUnion(newMessage)
    });

    resetTranscript(finalTranscript);
    refreshPage();

  }

  return (

    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body has-text-centered" layout="row">
        <div class="column">

          <div class="row">
            {name ? name : ""}
            <br></br>
            {email ? email : ""}
            <br></br>
            <button class="button is-small is-responsive is-link is-rounded" onClick={logout}>Logout</button>
          </div>

          <br></br>

          <div class="row">
            <p>Microphone: {listening ? 'on' : 'off'}</p>
          </div>

          <div class="row">
            <button class="button is-small is-responsive is-link is-rounded" onClick={SpeechRecognition.startListening}>Record</button>
            {/* <PushToTalkButtonContainer>
              <PushToTalkButton captureKey=" " onClick={SpeechRecognition.startListening}/>
            </PushToTalkButtonContainer> */}
          </div>

          <br></br>

          <div class="row">
            <div class="tile is-ancestor">
              <div class="tile is-12">
                <div class="tile">
                  <article class="tile is-child notification is-dark">
                    <div class="content">
                      <p>{transcript}</p>
                      {/* <BigTranscript/> */}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <br></br>

          <div class="row">
            {finalTranscript ? <button class="button is-small is-responsive is-link is-rounded" onClick={() => {resetTranscript()}} > Reset </button>
            : <button class="button is-small is-responsive is-link is-rounded" title="Disabled button" disabled> Reset </button>}
          </div>

          <br></br>

          <div class="row">
            {finalTranscript ? <button class="button is-small is-responsive is-link is-rounded" onClick={() => {addMessage(user.uid, transcript)}} > Submit </button>
            : <button class="button is-small is-responsive is-link is-rounded" title="Disabled button" disabled> Submit </button>}
          </div>

          <br></br>

          <div class="row">
            <hr></hr>
            {messages.slice(-5).map((message) => {
              return (
                <div>
                  {message} 
                  <hr></hr>
                </div>
              )
            })}
          </div>

        </div>
      </div>
   </section>
  );
};
=======
import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, db, logout } from "./firebase-config";

import { query, collection, getDocs,  updateDoc, where, doc, arrayUnion } from 'firebase/firestore';


// import { PushToTalkButton, BigTranscript, PushToTalkButtonContainer } from "@speechly/react-ui";
// import { useSpeechContext } from '@speechly/react-client';

const appId = '762a5828-6832-4887-b58d-ee0a77ff6448';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState([]);
  // const { segment } = useSpeechContext();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
      setMessages(data.messages);
    } catch (err) {
      fetchUserName();
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName();
  },[loading, user]);

  const {
    transcript,
    listening,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const addMessage = async (id, newMessage) => {

    const q = query(collection(db, "users"), where("uid", "==", id));
    const docRef = await getDocs(q);

    const doccy = doc(db, "users", docRef.docs[0].id);

    await updateDoc(doccy, {
      messages: arrayUnion(newMessage)
    });

    resetTranscript(finalTranscript);
    refreshPage();

  }

  return (

    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body has-text-centered" layout="row">
        <div class="column">

          <div class="row">
            {name ? name : ""}
            <br></br>
            {email ? email : ""}
            <br></br>
            <button class="button is-small is-responsive is-link is-rounded" onClick={logout}>Logout</button>
          </div>

          <br></br>

          <div class="row">
            <p>Microphone: {listening ? 'on' : 'off'}</p>
          </div>

          <div class="row">
            <button class="button is-small is-responsive is-link is-rounded" onClick={SpeechRecognition.startListening}>Record</button>
            {/* <PushToTalkButtonContainer>
              <PushToTalkButton captureKey=" " onClick={SpeechRecognition.startListening}/>
            </PushToTalkButtonContainer> */}
          </div>

          <br></br>

          <div class="row">
            <div class="tile is-ancestor">
              <div class="tile is-12">
                <div class="tile">
                  <article class="tile is-child notification is-dark">
                    <div class="content">
                      <p>{transcript}</p>
                      {/* <BigTranscript/> */}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <br></br>

          <div class="row">
            {finalTranscript ? <button class="button is-small is-responsive is-link is-rounded" onClick={() => {resetTranscript()}} > Reset </button>
            : <button class="button is-small is-responsive is-link is-rounded" title="Disabled button" disabled> Reset </button>}
          </div>

          <br></br>

          <div class="row">
            {finalTranscript ? <button class="button is-small is-responsive is-link is-rounded" onClick={() => {addMessage(user.uid, transcript)}} > Submit </button>
            : <button class="button is-small is-responsive is-link is-rounded" title="Disabled button" disabled> Submit </button>}
          </div>

          <br></br>

          <div class="row">
            <hr></hr>
            {messages.slice(-5).map((message) => {
              return (
                <div>
                  {message} 
                  <hr></hr>
                </div>
              )
            })}
          </div>

        </div>
      </div>
   </section>
  );
};
>>>>>>> e5c10ba2fcacf769fafabce98d4c78eb933310ce
export default Dictaphone;