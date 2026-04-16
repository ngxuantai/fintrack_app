import React from 'react';
import { ScrollView, Text, View } from 'react-native';
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
          <View style={appStyles.balanceCard}>
            <Text style={appStyles.overline}>TOTAL BALANCE</Text>
            <View style={appStyles.balanceRow}>
              <Text style={appStyles.balanceCurrency}>$</Text>
              <Text style={appStyles.balanceAmount}>24,850.42</Text>
            </View>
            <Text style={appStyles.growthLabel}>+12.5% this month</Text>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Spending Flow</Text>
            <Text style={appStyles.overline}>Monthly Breakdown</Text>
          </View>
          <View style={appStyles.overviewBlock}>
            <View style={appStyles.donutPanel}>
              <View style={appStyles.donutOuter}>
                <View style={appStyles.donutInner}>
                  <Text style={appStyles.donutValue}>$8,240</Text>
                  <Text style={appStyles.donutCaption}>SPENT</Text>
                </View>
              </View>
            </View>

            <View style={appStyles.progressList}>
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
              style={appStyles.transactionItem}
            >
              <View style={appStyles.transactionLeft}>
                <View style={appStyles.iconCircle}>
                  <Text style={appStyles.iconText}>{tx.tag}</Text>
                </View>
                <View>
                  <Text style={appStyles.transactionName}>{tx.merchant}</Text>
                  <Text style={appStyles.transactionDate}>{tx.date}</Text>
                </View>
              </View>
              <Text style={appStyles.transactionAmount}>{tx.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
