import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../../components/layout/TopBar';
import { PROFILE_IMAGES, TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type BudgetScreenProps = {
  topInset: number;
  bottomInset: number;
};

export default function BudgetScreen({
  topInset,
  bottomInset,
}: BudgetScreenProps) {
  const budgetRows = [
    { name: 'Dining', spent: 840, limit: 1200 },
    { name: 'Transport', spent: 450, limit: 600 },
    { name: 'Shopping', spent: 1120.5, limit: 1000 },
    { name: 'Home', spent: 1010, limit: 2200 },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="Finance Hub" profileUri={PROFILE_IMAGES.budget} />
      </View>
      <ScrollView
        style={appStyles.scrollBase}
        contentContainerStyle={{
          paddingTop: 96 + topInset,
          paddingBottom: bottomInset + 112,
        }}
      >
        <View style={appStyles.contentPadding}>
          <Text style={styles.heroTitle}>Budget</Text>
          <Text style={appStyles.sectionMeta}>Monthly Budget Status</Text>

          <View style={styles.budgetHeroCard}>
            <View style={styles.budgetTopRow}>
              <View>
                <Text style={appStyles.overline}>TOTAL SPENT</Text>
                <Text style={styles.budgetSpent}>$3,420.50</Text>
              </View>
              <View style={styles.budgetTopRight}>
                <Text style={appStyles.overline}>LIMIT</Text>
                <Text style={styles.budgetLimit}>$5,000.00</Text>
              </View>
            </View>
            <View style={styles.progressTrackThick}>
              <View
                style={[appStyles.progressFill, styles.budgetHeroProgressFill]}
              />
            </View>
            <View style={appStyles.rowBetween}>
              <Text style={styles.metaText}>68% of your budget used</Text>
              <Text style={styles.metaText}>$1,579.50 remaining</Text>
            </View>
          </View>

          <Text style={appStyles.sectionTitle}>Spending Categories</Text>
          {budgetRows.map(item => {
            const ratio = item.spent / item.limit;
            return (
              <View key={item.name} style={styles.budgetRowCard}>
                <View style={styles.budgetRowHeader}>
                  <Text style={styles.budgetCategory}>{item.name}</Text>
                  <Text style={styles.budgetRatio}>
                    ${item.spent.toFixed(2)} / ${item.limit.toFixed(2)}
                  </Text>
                </View>
                <View style={appStyles.progressTrack}>
                  <View
                    style={[
                      appStyles.progressFill,
                      {
                        width: `${Math.round(Math.min(ratio, 1) * 100)}%`,
                        backgroundColor:
                          item.name === 'Shopping'
                            ? TOKENS.error
                            : item.name === 'Dining'
                            ? TOKENS.primaryContainer
                            : TOKENS.primary,
                      },
                    ]}
                  />
                </View>
              </View>
            );
          })}

          <View style={styles.glassCard}>
            <Text style={styles.glassTitle}>Architectural Tip</Text>
            <Text style={styles.glassBody}>
              Structure your finances like a balanced foundation. Move surplus
              from Home to Shopping to keep spending on target.
            </Text>
            <Pressable>
              <Text style={styles.glassLink}>VIEW ANALYTICS</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heroTitle: {
    color: TOKENS.onBackground,
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -1.3,
  },
  budgetHeroCard: {
    marginTop: 4,
    borderRadius: 16,
    backgroundColor: TOKENS.surfaceLowest,
    padding: 18,
  },
  budgetTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  budgetTopRight: {
    alignItems: 'flex-end',
  },
  budgetSpent: {
    marginTop: 4,
    color: TOKENS.onBackground,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1,
  },
  budgetLimit: {
    marginTop: 4,
    color: TOKENS.onBackground,
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  progressTrackThick: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    backgroundColor: TOKENS.surfaceHigh,
    overflow: 'hidden',
    marginTop: 14,
    marginBottom: 8,
  },
  budgetHeroProgressFill: {
    width: '68%',
    backgroundColor: TOKENS.primaryContainer,
  },
  metaText: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '500',
  },
  budgetRowCard: {
    backgroundColor: TOKENS.surfaceLowest,
    borderRadius: 16,
    padding: 14,
    gap: 8,
  },
  budgetRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetCategory: {
    color: TOKENS.onBackground,
    fontSize: 16,
    fontWeight: '600',
  },
  budgetRatio: {
    color: TOKENS.onBackground,
    fontSize: 15,
    fontWeight: '700',
  },
  glassCard: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: TOKENS.primary,
    gap: 10,
  },
  glassTitle: {
    color: TOKENS.onPrimary,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  glassBody: {
    color: '#b6f5ce',
    fontSize: 13,
    lineHeight: 20,
  },
  glassLink: {
    color: TOKENS.onPrimary,
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: '700',
  },
});
