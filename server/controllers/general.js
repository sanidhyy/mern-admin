// Models import
import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

// Get User
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Dashboard Stats
export const getDashboardStats = async (_, res) => {
  try {
    // Hardcoded Values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDate = "2021-11-15";

    // Recent Transactions
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdAt: -1 });

    // Overall Stats
    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    // This month stats
    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    // today stats
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDate;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
