<template>
    <q-page class="q-ma-lg">
        <q-stepper done-icon="done_outline" flat ref="stepper" v-model="step" color="green" :alternative-labels="alt" :contractable="contractable" vertical>
            <q-step default name="first" title="First">
                <p>
                    This is first step. To next step click on button next.
                </p>
                <q-stepper-navigation v-if="!globalNavigation">
                    <q-btn color="green" round icon="skip_previous" class="q-ma-sm" @click="$refs.stepper.previous()" />
                    <q-btn color="green" round icon="skip_next" class="q-ma-sm" @click="$refs.stepper.next()" />
                </q-stepper-navigation>
            </q-step>
            
            <q-step default name="second" title="Second">
                <p>
                    This is second step. To next step click on button next.
                </p>
                <q-stepper-navigation v-if="!globalNavigation">
                    <q-btn color="green" round icon="skip_previous" class="q-ma-sm" @click="$refs.stepper.previous()" />
                    <q-btn color="green" round icon="skip_next" class="q-ma-sm" @click="$refs.stepper.next()" />
                </q-stepper-navigation>
            </q-step>
            
            <q-step default name="third" title="Third">
                <p>
                    This is third step. To next step click on button next.
                </p>
                <q-stepper-navigation v-if="!globalNavigation">
                    <q-btn color="green" round icon="skip_previous" class="q-ma-sm" @click="$refs.stepper.previous()" />
                    <q-btn color="green" round icon="skip_next" class="q-ma-sm" @click="$refs.stepper.next()" />
                </q-stepper-navigation>
            </q-step>
           
            <q-step default name="fourth" title="Fourth">
                <p>
                    This is fourth step. To next step click on button next.
                </p>
                <q-stepper-navigation v-if="!globalNavigation">
                    <q-btn color="green" round icon="skip_previous" class="q-ma-sm" @click="$refs.stepper.previous()" />
                    <q-btn color="green" round icon="skip_next" class="q-ma-sm" @click="$refs.stepper.next()" />
                </q-stepper-navigation>
            </q-step>
        </q-stepper>
    </q-page>
</template>
<script>
export default {
    data(){
        return{
            step: 'first',
            options: ['contarctable']
        }
    },
    computed: {
        alt(){
            return this.options.includes('alt')
        },
        contractable(){
            return this.options.includes('contractable')
        },
        globalNavigation(){
            return this.options.includes('global_navigation')
        }
    }
}
</script>