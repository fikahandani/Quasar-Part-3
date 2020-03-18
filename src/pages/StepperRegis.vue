<template>
  <q-page class="q-ma-lg">
    <div align="center">
      <p class="text-bold">This is Stepper for Registration Form</p>
    </div>

    <q-stepper
      done-icon="done_outline"
      flat
      ref="stepper"
      v-model="step"
      color="green"
      :alternative-labels="alt"
      :contractable="contractable"
      vertical
    >
      <q-step default name="personalInfo" title="Personal Info">
        <div class="row">
          <div class="col-lg-8 col-xs-12 q-pa-sm">
            <q-input stack-label="First Name" v-model="firstName" required />
            <q-input stack-label="Last Name" v-model="lastName" required />
            <q-input stack-label="Addres" v-model="addres" required />
            <q-input stack-label="Email" v-model="email" required type="email" />
          </div>
          <div class="col-lg-4 col-xs-12 q-pa-sm">
            <q-stepper-navigation>
              <q-btn color="blue" icon="edit" label="education" @click="$refs.stepper.next()" />
            </q-stepper-navigation>
          </div>
        </div>
      </q-step>

      <q-step default name="education" title="Education">
        <div class="row">
          <div class="col-lg-8 col-xs-12 q-pa-sm">
            <q-input stack-label="University" v-model="university" />
            <q-input stack-label="University Address" v-model="universityAddres" />
            <q-input stack-label="GPA" v-model="gpa" type="number" />
          </div>
          <div class="col-lg-4 col-xs-12 q-pa-sm">
            <q-stepper-navigation>
              <q-btn
                class="q-ma-sm"
                color="blue"
                icon="code"
                label="Previous"
                @click="$refs.stepper.previous()"
              />
              <q-btn
                class="q-ma-sm"
                color="green"
                icon="code"
                label="Done"
                @click="$refs.stepper.next()"
              />
            </q-stepper-navigation>
          </div>
        </div>
      </q-step>
    </q-stepper>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      addres: "",
      university: "",
      universityAddres: "",
      gpa: "",
      email: ""
    };
  }
};
</script>