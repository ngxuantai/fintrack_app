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
      date: 'June 24, 2024',
      amount: '-$1,299.00',
      tag: 'SHOP',
    },
    {
      merchant: 'The Nomad Bistro',
      date: 'June 23, 2024',
      amount: '-$84.50',
      tag: 'FOOD',
    },
    {
      merchant: 'Freelance Payment',
      date: 'June 22, 2024',
      amount: '+$2,450.00',
      tag: 'IN',
    },
    {
      merchant: 'Equinox Gym',
      date: 'June 20, 2024',
      amount: '-$150.00',
      tag: 'FIT',
    },
    {
      merchant: 'Delta Airlines',
      date: 'June 18, 2024',
      amount: '-$430.20',
      tag: 'TRIP',
    },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="FinTrack" profileUri={PROFILE_IMAGES.dashboard} />
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
              <Text style={appStyles.balanceAmount}>42,580.00</Text>
            </View>
            <Text style={appStyles.growthLabel}>+2.4% vs last month</Text>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Spending Overview</Text>
            <Text style={appStyles.overline}>JUNE 2024</Text>
          </View>
          <View style={appStyles.overviewBlock}>
            <View style={appStyles.donutPanel}>
              <View style={appStyles.donutOuter}>
                <View style={appStyles.donutInner}>
                  <Text style={appStyles.donutValue}>72%</Text>
                  <Text style={appStyles.donutCaption}>OF BUDGET</Text>
                </View>
              </View>
            </View>

            <View style={appStyles.progressList}>
              <ProgressRow
                label="Housing"
                amount="$2,100"
                percent={0.65}
                color={TOKENS.primary}
              />
              <ProgressRow
                label="Lifestyle"
                amount="$840"
                percent={0.35}
                color={TOKENS.primaryContainer}
              />
              <ProgressRow
                label="Savings"
                amount="$1,250"
                percent={0.5}
                color={TOKENS.muted}
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
