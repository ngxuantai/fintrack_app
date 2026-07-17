import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import CategoryChip from '../../components/common/CategoryChip';
import { TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type AddTransactionScreenProps = {
  topInset: number;
  bottomInset: number;
  onClose: () => void;
};

export default function AddTransactionScreen({
  topInset,
  bottomInset,
  onClose,
}: AddTransactionScreenProps) {
  const [amount, setAmount] = useState('0');

  const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

  const onPadPress = (value: string) => {
    if (value === '⌫') {
      setAmount(prev => (prev.length <= 1 ? '0' : prev.slice(0, -1)));
      return;
    }
    if (value === '.') {
      setAmount(prev => (prev.includes('.') ? prev : `${prev}.`));
      return;
    }
    setAmount(prev => (prev === '0' ? value : `${prev}${value}`));
  };

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.subPageHeader, { paddingTop: topInset + 4 }]}>
        <View style={appStyles.subPageHeaderInner}>
          <View style={appStyles.profileRow}>
            <Pressable onPress={onClose} style={appStyles.closeButton}>
              <Text style={appStyles.closeButtonText}>X</Text>
            </Pressable>
            <Text style={appStyles.topBarTitle}>Add Transaction</Text>
          </View>
          <Text style={appStyles.helpText}>...</Text>
        </View>
      </View>

      <ScrollView
        style={appStyles.scrollBase}
        contentContainerStyle={{
          paddingTop: 96 + topInset,
          paddingBottom: bottomInset + 24,
        }}
      >
        <View style={appStyles.contentPadding}>
          <View style={appStyles.centerAmount}>
            <Text style={appStyles.overline}>Amount</Text>
            <View style={appStyles.balanceRow}>
              <Text style={appStyles.amountInputValue}>{amount}</Text>
              <Text style={appStyles.balanceCurrency}>$</Text>
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Category</Text>
            <Text style={appStyles.overline}>Swipe</Text>
          </View>

          <View style={appStyles.categoryChipGrid}>
            <CategoryChip label="Food" active />
            <CategoryChip label="Transport" />
            <CategoryChip label="Shopping" />
            <CategoryChip label="Bills" />
          </View>

          <View style={appStyles.formGroup}>
            <Text style={appStyles.overline}>Date</Text>
            <TextInput
              editable={false}
              value="Today"
              style={appStyles.flatInput}
              placeholderTextColor={TOKENS.onSurfaceVariant}
            />
          </View>

          <View style={appStyles.formGroup}>
            <Text style={appStyles.overline}>Notes</Text>
            <TextInput
              value=""
              style={appStyles.flatInput}
              placeholder="Add details..."
              placeholderTextColor={TOKENS.onSurfaceVariant}
            />
          </View>
        </View>

        <View
          style={[appStyles.keypadShell, { paddingBottom: bottomInset + 16 }]}
        >
          <View style={appStyles.keypadGrid}>
            {keypad.map(key => (
              <Pressable
                key={key}
                onPress={() => onPadPress(key)}
                style={appStyles.keyButton}
              >
                <Text style={appStyles.keyText}>{key}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable style={appStyles.addButton} onPress={onClose}>
            <Text style={appStyles.addButtonText}>Add Expense</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
