<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128" />
            </figure>
            <form v-on:submit.prevent="signup">
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.username.$touch()"
                    v-model="form.username"
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                 />
                 <div v-if="$v.form.username.$error" class="form-error">
                    <span v-if="!$v.form.username.required" class="help is-danger">
                      Username is required
                    </span>
                 </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.name.$touch()"
                    v-model="form.name"
                    class="input is-large"
                    type="text"
                    placeholder="Name"
                  />
                   <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger">
                      Name is required
                    </span>
                 </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.email.$touch()"
                    v-model="form.email"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                  />
                   <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger"> Email is required </span>
                    <span v-if="!$v.form.email.email" class="help is-danger">
                    Enter the right email format
                    </span>
                 </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.avatar"
                    @blur="$v.form.avatar.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete=""
                  />
                  <span v-if="!$v.form.avatar.url" class="help is-danger">
                    Enter the right url format
                    </span>
                     <span v-if="!$v.form.avatar.supportedFileType" class="help is-danger">
                    wrong extension format
                    </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.password.$touch()"
                    v-model="form.password"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                  />
                   <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">
                      Password is required
                    </span>
                     <span v-if="!$v.form.password.minLength" class="help is-danger">
                      Password should not be less than 6 characters
                    </span>
                 </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.passwordConfirmation.$touch()"
                    v-model="form.passwordConfirmation"
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                  />
                   <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                    <span v-if="!$v.form.passwordConfirmation.required" class="help is-danger">
                      Password is required
                    </span>
                     <span v-if="!$v.form.passwordConfirmation.sameAs" class="help is-danger">
                       Passwords do not match
                    </span>
                 </div>
                </div>
              </div>
              <button
            
                :disabled="formIsInValid"
                class="button is-block is-info is-large is-fullwidth"
              >
                Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link :to="'login'" href="../">Login</router-link>
            &nbsp;·&nbsp; <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength, sameAs, url} from "vuelidate/lib/validators";
import {supportedFileType} from '@/helper/validators'
export default {
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },

  validations: {
    form: {
      username: {
        required,
      },

      name: {
          required
      },

      email: {
          required,
          email
      },
      avatar: {
          url,
          supportedFileType
      },

      password: {
          required,
          minLength: minLength(6)
      },

      passwordConfirmation: {
          required,
          sameAs: sameAs('password')
      },
    },
  },

  computed:{
      formIsInValid(){
          return this.$v.form.$invalid
      }
  },
 
  methods: {
    signup() {
      this.$v.form.$touch();
      this.$store.dispatch("auth/registerUser", this.form);
    },
  },
};
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
