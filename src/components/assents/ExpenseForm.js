import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import CustomButton from './customButon';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState('');

  const handleAddExpense = () => {
    if (expense.trim()) {
      onAddExpense(expense);
      setExpense('');
      
    }
  };
  /*const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    storeData(gastos+newExpense)
   
  };*/
  return (
    <View>
      <TextInput
        placeholder="Ingrese el gasto"
        keyboardType='numeric'
        value={expense}
        onChangeText={setExpense}
      />
      <CustomButton title="Agregar Gasto" onPress={handleAddExpense} />
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

    </View>
  );
};

export default ExpenseForm;