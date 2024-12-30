import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class FirebaseApp extends Component {
    state = {
        user: {
            name: " "
        }
    }
    constructor(props) {
        super(props);
            this.getUser();
            this.subscriber = firestone().collection("users").doc
            (#put in key here).onSnapshot(doc => {
                this.setState({
                        user: {
                        name: doc.docname
                }})
            })
            firestore()
                .collection('users')
                .get()
                .then(querySnapshot => {
                    console.log('Total users: ', querySnapshot.size);
                    querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id,
                        documentSnapshot.data());
                    })
                })

        }
        getUser = async () => {
            const userDocument = await firestore().collection("users").
            console.log(userDocument)
        }
        render() {
            return (
                <View>
                    <Text> Name: {this.state.user.name} </Text>
                </View>
            );
        }
}

export default FireBaseApp