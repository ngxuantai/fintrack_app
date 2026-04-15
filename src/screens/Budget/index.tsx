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
    { name: 'Eating Out', spent: 300, limit: 500 },
    { name: 'Transport', spent: 120, limit: 150 },
    { name: 'Shopping', spent: 850, limit: 1000 },
    { name: 'Home', spent: 150, limit: 350 },
  ];

  return (
    <View style={appStyles.screenBase}>
      <View style={[appStyles.safeHeader, { paddingTop: topInset + 4 }]}>
        <TopBar title="FinTrack" profileUri={PROFILE_IMAGES.budget} />
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
          <Text style={appStyles.sectionMeta}>MONTHLY LIMIT STATUS</Text>

          <View style={appStyles.budgetHeroCard}>
            <View style={appStyles.budgetTopRow}>
              <View>
                <Text style={appStyles.overline}>TOTAL SPENT</Text>
                <Text style={appStyles.budgetSpent}>$1,420.00</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={appStyles.overline}>LIMIT</Text>
                <Text style={appStyles.budgetLimit}>$2,000.00</Text>
              </View>
            </View>
            <View style={appStyles.progressTrackThick}>
              <View
                style={[
                  appStyles.progressFill,
                  { width: '71%', backgroundColor: TOKENS.primary },
                ]}
              />
            </View>
            <View style={appStyles.rowBetween}>
              <Text style={appStyles.metaText}>71% of your budget used</Text>
              <Text style={appStyles.metaText}>$580.00 remaining</Text>
            </View>
          </View>

          <Text style={appStyles.sectionTitle}>Categories</Text>
          {budgetRows.map(item => {
            const ratio = item.spent / item.limit;
            return (
              <View key={item.name} style={appStyles.budgetRowCard}>
                <View style={appStyles.budgetRowHeader}>
                  <Text style={appStyles.budgetCategory}>{item.name}</Text>
                  <Text style={appStyles.budgetRatio}>
                    ${item.spent} / ${item.limit}
                  </Text>
                </View>
                <View style={appStyles.progressTrack}>
                  <View
                    style={[
                      appStyles.progressFill,
                      {
                        width: `${Math.round(ratio * 100)}%`,
                        backgroundColor: TOKENS.primary,
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
              You spent 15% less on Eating Out compared to last month. Move the
              excess into your savings goal.
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
