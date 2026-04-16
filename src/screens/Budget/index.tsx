import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
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
          <Text style={appStyles.heroTitle}>Budget</Text>
          <Text style={appStyles.sectionMeta}>Monthly Budget Status</Text>

          <View style={appStyles.budgetHeroCard}>
            <View style={appStyles.budgetTopRow}>
              <View>
                <Text style={appStyles.overline}>TOTAL SPENT</Text>
                <Text style={appStyles.budgetSpent}>$3,420.50</Text>
              </View>
              <View style={appStyles.budgetTopRight}>
                <Text style={appStyles.overline}>LIMIT</Text>
                <Text style={appStyles.budgetLimit}>$5,000.00</Text>
              </View>
            </View>
            <View style={appStyles.progressTrackThick}>
              <View
                style={[
                  appStyles.progressFill,
                  appStyles.budgetHeroProgressFill,
                ]}
              />
            </View>
            <View style={appStyles.rowBetween}>
              <Text style={appStyles.metaText}>68% of your budget used</Text>
              <Text style={appStyles.metaText}>$1,579.50 remaining</Text>
            </View>
          </View>

          <Text style={appStyles.sectionTitle}>Spending Categories</Text>
          {budgetRows.map(item => {
            const ratio = item.spent / item.limit;
            return (
              <View key={item.name} style={appStyles.budgetRowCard}>
                <View style={appStyles.budgetRowHeader}>
                  <Text style={appStyles.budgetCategory}>{item.name}</Text>
                  <Text style={appStyles.budgetRatio}>
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

          <View style={appStyles.glassCard}>
            <Text style={appStyles.glassTitle}>Architectural Tip</Text>
            <Text style={appStyles.glassBody}>
              Structure your finances like a balanced foundation. Move surplus
              from Home to Shopping to keep spending on target.
            </Text>
            <Pressable>
              <Text style={appStyles.glassLink}>VIEW ANALYTICS</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
