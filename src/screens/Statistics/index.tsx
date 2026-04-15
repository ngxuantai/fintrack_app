import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import TopBar from '../../components/layout/TopBar';
import { PROFILE_IMAGES, TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type StatisticsScreenProps = {
  topInset: number;
  bottomInset: number;
};

export default function StatisticsScreen({
  topInset,
  bottomInset,
}: StatisticsScreenProps) {
  const monthlyBars = [0.4, 0.65, 0.55, 0.85, 0.45, 0.95];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
  const categories = [
    { title: 'Food & Dining', total: '$1,369.76', percent: 0.32 },
    { title: 'Transport', total: '$770.49', percent: 0.18 },
    { title: 'Shopping', total: '$1,070.12', percent: 0.25 },
    { title: 'Entertainment', total: '$642.07', percent: 0.15 },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="Stats" profileUri={PROFILE_IMAGES.statistics} />
      </View>
      <ScrollView
        style={appStyles.scrollBase}
        contentContainerStyle={{
          paddingTop: 96 + topInset,
          paddingBottom: bottomInset + 112,
        }}
      >
        <View style={appStyles.contentPadding}>
          <Text style={appStyles.overline}>TOTAL THIS MONTH</Text>
          <Text style={appStyles.heroAmount}>$4,280.50</Text>

          <View style={appStyles.dualCards}>
            <View style={appStyles.statCardPrimary}>
              <Text style={appStyles.overline}>AVG / DAY</Text>
              <Text style={appStyles.statCardValue}>$142.68</Text>
            </View>
            <View style={appStyles.statCardMuted}>
              <Text style={appStyles.overline}>VS LAST MONTH</Text>
              <Text style={[appStyles.statCardValue, { color: TOKENS.error }]}>
                +12.4%
              </Text>
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Monthly Comparison</Text>
            <Text style={appStyles.sectionMeta}>Last 6 Months</Text>
          </View>
          <View style={appStyles.chartCard}>
            {monthlyBars.map((height, index) => {
              const isActive = index === monthlyBars.length - 1;
              return (
                <View key={months[index]} style={appStyles.chartColumnWrap}>
                  <View
                    style={[
                      appStyles.chartColumn,
                      {
                        height: `${height * 100}%`,
                        backgroundColor: isActive
                          ? TOKENS.primary
                          : index % 2 === 0
                          ? TOKENS.surfaceHighest
                          : TOKENS.primaryContainer,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      appStyles.chartLabel,
                      isActive && appStyles.chartLabelActive,
                    ]}
                  >
                    {months[index]}
                  </Text>
                </View>
              );
            })}
          </View>

          <Text style={appStyles.sectionTitle}>Spending Categories</Text>
          {categories.map(item => (
            <View key={item.title} style={appStyles.categoryCard}>
              <View style={appStyles.categoryHeader}>
                <View>
                  <Text style={appStyles.categoryName}>{item.title}</Text>
                  <Text style={appStyles.categoryPercent}>
                    {Math.round(item.percent * 100)}% of total
                  </Text>
                </View>
                <Text style={appStyles.categoryAmount}>{item.total}</Text>
              </View>
              <View style={appStyles.progressTrack}>
                <View
                  style={[
                    appStyles.progressFill,
                    {
                      width: `${item.percent * 100}%`,
                      backgroundColor: TOKENS.primary,
                    },
                  ]}
                />
              </View>
            </View>
          ))}

          <View style={appStyles.insightCard}>
            <Text style={appStyles.insightOverline}>FINTRACK AI INSIGHT</Text>
            <Text style={appStyles.insightTitle}>
              Shopping spend is 15% higher than last month.
            </Text>
            <Pressable style={appStyles.insightButton}>
              <Text style={appStyles.insightButtonText}>VIEW DETAILS</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
