<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="info" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu>
                        <v-text-field :value="formatedDate" slot="activator" label="date" prepend-icon="date_range"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-btn flat class="success right mx-0 mt-4" @click="submit">add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb';

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                V => V.length >= 3 || 'Minimum is 3'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(this.due, 'Do MMM YYYY'),
                    person: 'mohamed',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    console.log('added');
                });
            }
        }
    },
    computed: {
        formatedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    }
}
</script>
