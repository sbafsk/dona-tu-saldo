import React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form'

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      lugar: '',
      cantidad: 0
    }
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Benficiario</Text>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="contained"
          />
        )}
        name="lugar"
      />
      {errors.lugar && <Text>This is required.</Text>}
      <Text style={styles.label}>Cantidad</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="contained"
            keyboardType="numeric"
          />
        )}
        name="cantidad"
      />

      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        Enviar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginLeft: 0
  },
  button: {
    marginTop: 40
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%'
  },
  input: {
    border: 'blue',
    height: 40,
    width: 250,
    padding: 5,
    borderRadius: 4
  }
})
