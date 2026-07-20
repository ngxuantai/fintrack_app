import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
      <View style={[styles.subPageHeader, { paddingTop: topInset + 4 }]}>
        <View style={styles.subPageHeaderInner}>
          <View style={appStyles.profileRow}>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <Text style={appStyles.topBarTitle}>Add Transaction</Text>
          </View>
          <Text style={styles.helpText}>...</Text>
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
          <View style={styles.centerAmount}>
            <Text style={appStyles.overline}>Amount</Text>
            <View style={appStyles.balanceRow}>
              <Text style={styles.amountInputValue}>{amount}</Text>
              <Text style={appStyles.balanceCurrency}>$</Text>
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Category</Text>
            <Text style={appStyles.overline}>Swipe</Text>
          </View>

          <View style={styles.categoryChipGrid}>
            <CategoryChip label="Food" active />
            <CategoryChip label="Transport" />
            <CategoryChip label="Shopping" />
            <CategoryChip label="Bills" />
          </View>

          <View style={styles.formGroup}>
            <Text style={appStyles.overline}>Date</Text>
            <TextInput
              editable={false}
              value="Today"
              style={styles.flatInput}
              placeholderTextColor={TOKENS.onSurfaceVariant}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={appStyles.overline}>Notes</Text>
            <TextInput
              value=""
              style={styles.flatInput}
              placeholder="Add details..."
              placeholderTextColor={TOKENS.onSurfaceVariant}
            />
          </View>
        </View>

        <View
          style={[styles.keypadShell, { paddingBottom: bottomInset + 16 }]}
        >
          <View style={styles.keypadGrid}>
            {keypad.map(key => (
              <Pressable
                key={key}
                onPress={() => onPadPress(key)}
                style={styles.keyButton}
              >
                <Text style={styles.keyText}>{key}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable style={styles.addButton} onPress={onClose}>
            <Text style={styles.addButtonText}>Add Expense</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subPageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 30,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(252,249,248,0.94)',
  },
  subPageHeaderInner: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TOKENS.surfaceLow,
  },
  closeButtonText: {
    color: TOKENS.primary,
    fontSize: 12,
    fontWeight: '800',
  },
  helpText: {
    color: TOKENS.muted,
    fontSize: 18,
    fontWeight: '500',
  },
  centerAmount: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  amountInputValue: {
    color: TOKENS.primary,
    fontSize: 52,
    fontWeight: '800',
    letterSpacing: -1.7,
  },
  categoryChipGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 6,
    rowGap: 10,
  },
  formGroup: {
    borderRadius: 14,
    backgroundColor: TOKENS.surfaceLow,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
    gap: 4,
  },
  flatInput: {
    color: TOKENS.onBackground,
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  keypadShell: {
    marginTop: 12,
    marginHorizontal: -20,
    paddingTop: 20,
    paddingHorizontal: 22,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: TOKENS.surfaceLow,
    gap: 10,
  },
  keypadGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 6,
  },
  keyButton: {
    width: '33%',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  keyText: {
    color: TOKENS.onBackground,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  addButton: {
    marginTop: 6,
    height: 60,
    borderRadius: 14,
    backgroundColor: TOKENS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#005027',
    fontSize: 16,
    letterSpacing: 1.3,
    fontWeight: '800',
  },
});
