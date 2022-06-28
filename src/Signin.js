<<<<<<< HEAD
import React/*,{ useEffect, useState}*/ from 'react';
// import { Link, useNavigate } from "react-router-dom";
import { /*auth,*/ signInWithGoogle } from "./firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";


const Signin = () => {



    return (
      <section class="hero is-primary is-bold is-fullheight">
        <div class="hero-body has-text-centered" layout="row">


          <div class="column">
            <button class="button is-large is-responsive is-link is-rounded" onClick={signInWithGoogle}>
              <span> Login with Google </span>
            </button>
          </div>


        </div>
      </section>


    );
}

=======
import React/*,{ useEffect, useState}*/ from 'react';
// import { Link, useNavigate } from "react-router-dom";
import { /*auth,*/ signInWithGoogle } from "./firebase-config";
// import { useAuthState } from "react-firebase-hooks/auth";

const Signin = () => {

    return (
      <section class="hero is-primary is-bold is-fullheight">
        <div class="hero-body has-text-centered" layout="row">


          <div class="column">
            <button class="button is-large is-responsive is-link is-rounded" onClick={signInWithGoogle}>
              <span> Login with Google </span>
            </button>
          </div>


        </div>
      </section>


    );
}

>>>>>>> e5c10ba2fcacf769fafabce98d4c78eb933310ce
export default Signin;