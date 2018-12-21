import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { getTimeFieldValues } from 'uuid-js';

class App extends Component {
  state = {
    isLoaded:getTimeFieldValues
  };

  render(){
    const{isLoaded}=this.state;
    return(
        <View>
          {isLoaded ? null : (
            <View>
              <Text>Getting your Weather~!
              </Text>
          
            </View>
          )}
        </View>
    )

  }

}


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>No More Error</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });