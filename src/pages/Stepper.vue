<template>
    <q-page class="col-lg-12 q-ma-lg">
        <q-stepper active-icon="sync_alt" done-icon="done_outline" flat ref="stepper" v-model="step" color="primary" :alternative-labels="alt" :contractable="contractable">
            <q-step default name="first" title="First">
                <p>
                    This is first step. to next step click on button next bellow.
                </p>
                 <q-stepper-navigation v-if="!globalNavigation">                
                <q-btn class="q-ma-sm" color="purple" icon="code" label="Next" @click="$refs.stepper.next()" />
            </q-stepper-navigation>
            </q-step>
            <q-step default name="second" title="Second">
                <p>
                    This is second step. to next or previous step click on button next bellow.
                </p>
                  <q-stepper-navigation v-if="!globalNavigation">                
                <q-btn class="q-ma-sm" color="green" icon="code" label="Prev" @click="$refs.stepper.previous()"/>
                <q-btn class="q-ma-sm" color="purple" icon="code" label="Next" @click="$refs.stepper.next()"/>
            </q-stepper-navigation>
            </q-step>
            <q-step default name="third" title="Third">
                <p>
                    This is third step. to next or previous step click on button next bellow.
                </p>
                 <q-stepper-navigation v-if="!globalNavigation">                
                <q-btn class="q-ma-sm" color="green" icon="code" label="Prev" @click="$refs.stepper.previous()"/>
                <q-btn class="q-ma-sm" color="purple" icon="code" label="Next" @click="$refs.stepper.next()"/>
            </q-stepper-navigation>
            </q-step>
            <q-step default name="fourth" title="Fourth">
                <p>
                    This is fourth step. to previous step click on button next bellow.
                </p>
                 <q-stepper-navigation v-if="!globalNavigation">                
                <q-btn class="q-ma-sm" color="green" icon="code" label="Prev" @click="$refs.stepper.previous()"/>
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
            options: ['contractable']
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