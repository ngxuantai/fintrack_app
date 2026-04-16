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
  const monthlyBars = [0.35, 0.2, 0.3, 0.15];
  const months = ['DIN', 'TRN', 'GRC', 'ENT'];
  const categories = [
    { title: 'Dining', total: '$1,499.75', percent: 0.35 },
    { title: 'Transport', total: '$857.00', percent: 0.2 },
    { title: 'Groceries', total: '$1,285.50', percent: 0.3 },
    { title: 'Entertainment', total: '$642.75', percent: 0.15 },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="VITALITY" profileUri={PROFILE_IMAGES.statistics} />
      </View>
      <ScrollView
        style={appStyles.scrollBase}
        contentContainerStyle={{
          paddingTop: 96 + topInset,
          paddingBottom: bottomInset + 112,
        }}
      >
        <View style={appStyles.contentPadding}>
          <Text style={appStyles.overline}>PORTFOLIO ANALYSIS</Text>
          <Text style={appStyles.heroAmount}>Spending Stats</Text>

          <View style={appStyles.dualCards}>
            <View style={appStyles.statCardPrimary}>
              <Text style={appStyles.overline}>TOTAL SPEND</Text>
              <Text style={appStyles.statCardValue}>$4,285</Text>
            </View>
            <View style={appStyles.statCardMuted}>
              <Text style={appStyles.overline}>SAVINGS POTENTIAL</Text>
              <Text
                style={[appStyles.statCardValue, { color: TOKENS.primary }]}
              >
                +$420
              </Text>
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Category Distribution</Text>
            <Text style={appStyles.sectionMeta}>Monthly</Text>
          </View>
          <View style={appStyles.chartCard}>
            {monthlyBars.map((height, index) => {
              const isActive = index === 2;
              return (
                <View key={months[index]} style={appStyles.chartColumnWrap}>
                  <View
                    style={[
                      appStyles.chartColumn,
                      {
                        height: `${height * 100}%`,
                        backgroundColor: isActive
                          ? TOKENS.primaryContainer
                          : index % 2 === 0
                          ? TOKENS.tertiary
                          : TOKENS.primary,
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

          <Text style={appStyles.sectionTitle}>Categorical Detail</Text>
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
                      backgroundColor:
                        item.title === 'Dining'
                          ? TOKENS.tertiary
                          : item.title === 'Groceries'
                          ? TOKENS.primaryContainer
                          : TOKENS.primary,
                    },
                  ]}
                />
              </View>
            </View>
          ))}

          <View style={appStyles.insightCard}>
            <Text style={appStyles.insightOverline}>TREND INSIGHT</Text>
            <Text style={appStyles.insightTitle}>
              You spent 12% less on Dining compared to last month.
            </Text>
            <Pressable style={appStyles.insightButton}>
              <Text style={appStyles.insightButtonText}>VIEW REPORT</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
