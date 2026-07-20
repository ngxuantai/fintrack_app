import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
          <Text style={styles.heroAmount}>Spending Stats</Text>

          <View style={styles.dualCards}>
            <View style={styles.statCardPrimary}>
              <Text style={appStyles.overline}>TOTAL SPEND</Text>
              <Text style={styles.statCardValue}>$4,285</Text>
            </View>
            <View style={styles.statCardMuted}>
              <Text style={appStyles.overline}>SAVINGS POTENTIAL</Text>
              <Text style={[styles.statCardValue, { color: TOKENS.primary }]}>
                +$420
              </Text>
            </View>
          </View>

          <View style={appStyles.sectionHeaderRow}>
            <Text style={appStyles.sectionTitle}>Category Distribution</Text>
            <Text style={appStyles.sectionMeta}>Monthly</Text>
          </View>
          <View style={styles.chartCard}>
            {monthlyBars.map((height, index) => {
              const isActive = index === 2;
              return (
                <View key={months[index]} style={styles.chartColumnWrap}>
                  <View
                    style={[
                      styles.chartColumn,
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
                      styles.chartLabel,
                      isActive && styles.chartLabelActive,
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
            <View key={item.title} style={styles.categoryCard}>
              <View style={styles.categoryHeader}>
                <View>
                  <Text style={styles.categoryName}>{item.title}</Text>
                  <Text style={styles.categoryPercent}>
                    {Math.round(item.percent * 100)}% of total
                  </Text>
                </View>
                <Text style={styles.categoryAmount}>{item.total}</Text>
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

          <View style={styles.insightCard}>
            <Text style={styles.insightOverline}>TREND INSIGHT</Text>
            <Text style={styles.insightTitle}>
              You spent 12% less on Dining compared to last month.
            </Text>
            <Pressable style={styles.insightButton}>
              <Text style={styles.insightButtonText}>VIEW REPORT</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heroAmount: {
    color: TOKENS.onBackground,
    fontSize: 46,
    fontWeight: '800',
    letterSpacing: -1.2,
    marginTop: 8,
  },
  dualCards: {
    flexDirection: 'row',
    gap: 10,
  },
  statCardPrimary: {
    flex: 1,
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    padding: 14,
    gap: 4,
  },
  statCardMuted: {
    flex: 1,
    backgroundColor: TOKENS.surfaceLow,
    borderRadius: 16,
    padding: 14,
    gap: 4,
  },
  statCardValue: {
    color: TOKENS.onBackground,
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  chartCard: {
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingTop: 18,
    paddingBottom: 12,
    minHeight: 210,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  chartColumnWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  chartColumn: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: 24,
  },
  chartLabel: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
  },
  chartLabelActive: {
    color: TOKENS.primary,
    fontWeight: '800',
  },
  categoryCard: {
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    padding: 14,
    gap: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryName: {
    color: TOKENS.onBackground,
    fontSize: 15,
    fontWeight: '600',
  },
  categoryPercent: {
    marginTop: 2,
    color: TOKENS.onSurfaceVariant,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  categoryAmount: {
    color: TOKENS.onBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  insightCard: {
    marginTop: 4,
    borderRadius: 16,
    padding: 18,
    backgroundColor: TOKENS.primaryContainer,
  },
  insightOverline: {
    color: 'rgba(0,80,39,0.75)',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '700',
  },
  insightTitle: {
    marginTop: 8,
    color: '#005027',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  insightButton: {
    marginTop: 14,
    alignSelf: 'flex-start',
    borderRadius: 10,
    backgroundColor: TOKENS.surfaceLowest,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  insightButtonText: {
    color: '#005027',
    fontSize: 10,
    letterSpacing: 1.8,
    fontWeight: '800',
  },
});
