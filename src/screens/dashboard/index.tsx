import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProgressRow from '../../components/common/ProgressRow';
import TopBar from '../../components/layout/TopBar';
import { PROFILE_IMAGES, TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type DashboardScreenProps = {
  topInset: number;
  bottomInset: number;
};

export default function DashboardScreen({
  topInset,
  bottomInset,
}: DashboardScreenProps) {
  const transactions = [
    {
      merchant: 'Apple Store',
      date: 'Electronics - Today',
      amount: '-$1,299.00',
      tag: 'SH',
    },
    {
      merchant: 'Wildseed SF',
      date: 'Dining - Yesterday',
      amount: '-$84.50',
      tag: 'FD',
    },
    {
      merchant: 'Monthly Salary',
      date: 'Income - 2 days ago',
      amount: '+$6,400.00',
      tag: 'IN',
    },
    {
      merchant: 'Tesla Supercharge',
      date: 'Transport - 3 days ago',
      amount: '-$22.40',
      tag: 'TR',
    },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="VITALITY" profileUri={PROFILE_IMAGES.dashboard} />
      </View>
      <ScrollView
        style={appStyles.scrollBase}
        contentContainerStyle={{
          paddingTop: 96 + topInset,
          paddingBottom: bottomInset + 112,
        }}
      >
        <View style={appStyles.contentPadding}>
          <View style={styles.balanceCard}>
            <Text style={appStyles.overline}>TOTAL BALANCE</Text>
            <View style={appStyles.balanceRow}>
              <Text style={appStyles.balanceCurrency}>$</Text>
              <Text style={styles.balanceAmount}>24,850.42</Text>
            </View>
            <Text style={styles.growthLabel}>+12.5% this month</Text>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Spending Flow</Text>
            <Text style={appStyles.overline}>Monthly Breakdown</Text>
          </View>
          <View style={styles.overviewBlock}>
            <View style={styles.donutPanel}>
              <View style={styles.donutOuter}>
                <View style={styles.donutInner}>
                  <Text style={styles.donutValue}>$8,240</Text>
                  <Text style={styles.donutCaption}>SPENT</Text>
                </View>
              </View>
            </View>

            <View style={styles.progressList}>
              <ProgressRow
                label="Housing"
                amount="$3,296"
                percent={0.4}
                color={TOKENS.primary}
              />
              <ProgressRow
                label="Lifestyle"
                amount="$2,884"
                percent={0.35}
                color={TOKENS.primaryContainer}
              />
              <ProgressRow
                label="Other"
                amount="$2,060"
                percent={0.25}
                color={TOKENS.primaryFixed}
              />
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Recent Transactions</Text>
            <Text style={[appStyles.overline, { color: TOKENS.primary }]}>
              SEE ALL
            </Text>
          </View>

          {transactions.map(tx => (
            <View
              key={`${tx.merchant}-${tx.date}`}
              style={styles.transactionItem}
            >
              <View style={styles.transactionLeft}>
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>{tx.tag}</Text>
                </View>
                <View>
                  <Text style={styles.transactionName}>{tx.merchant}</Text>
                  <Text style={styles.transactionDate}>{tx.date}</Text>
                </View>
              </View>
              <Text style={styles.transactionAmount}>{tx.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#1c1b1b',
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  balanceAmount: {
    color: TOKENS.primaryContainer,
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -1.2,
  },
  growthLabel: {
    marginTop: 12,
    color: TOKENS.primary,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overviewBlock: {
    gap: 12,
  },
  donutPanel: {
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1c1b1b',
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  donutOuter: {
    width: 166,
    height: 166,
    borderRadius: 83,
    borderWidth: 12,
    borderColor: TOKENS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutInner: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: TOKENS.surfaceLowest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutValue: {
    fontSize: 32,
    fontWeight: '800',
    color: TOKENS.onBackground,
    letterSpacing: -0.7,
  },
  donutCaption: {
    marginTop: 2,
    fontSize: 9,
    letterSpacing: 1,
    color: TOKENS.onSurfaceVariant,
    fontWeight: '700',
  },
  progressList: {
    gap: 10,
  },
  transactionItem: {
    borderRadius: 16,
    backgroundColor: TOKENS.surfaceLowest,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    shadowColor: '#1c1b1b',
    shadowOpacity: 0.03,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 1,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: TOKENS.surfaceLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: TOKENS.primary,
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  transactionName: {
    color: TOKENS.onBackground,
    fontSize: 15,
    fontWeight: '600',
  },
  transactionDate: {
    marginTop: 2,
    color: TOKENS.onSurfaceVariant,
    fontSize: 11,
  },
  transactionAmount: {
    color: TOKENS.onBackground,
    fontSize: 16,
    fontWeight: '700',
  },
});
