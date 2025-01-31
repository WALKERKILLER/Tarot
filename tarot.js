// 塔罗牌数据库
const tarotDeck = {
    majorArcana: [
        {
            name: "愚者 🃏",
            number: 0,
            image: "🃏",
            upright: {
                meaning: "新的开始，冒险精神，纯真无邪，自由奔放",
                career: "尝试新的职业方向，追随内心的召唤，勇于创新",
                love: "新的恋情，纯真的爱，无忧无虑的关系，保持开放",
                health: "保持乐观，保持活力，尝试新的健康方式，心态年轻"
            },
            reversed: {
                meaning: "鲁莽，不负责任，过度冒险，缺乏规划",
                career: "工作不够谨慎，决策草率，需要更多计划",
                love: "感情不够成熟，缺乏责任感，需要稳重",
                health: "需要更加注意身体，不要过于疲惫，保持规律作息"
            },
            funFact: "✨ 愚者是唯一没有数字的大阿尔卡纳牌，象征无限可能！"
        },
        {
            name: "魔术师 🎭",
            number: 1,
            image: "🎭",
            upright: {
                meaning: "创造力，技能，专注，意志力的实现",
                career: "充分发挥才能，展现专业技能，事业上升期",
                love: "魅力四射，吸引力强，能主导感情发展",
                health: "能量充沛，身心平衡，保持良好状态"
            },
            reversed: {
                meaning: "技能未熟，自欺欺人，能力误用，意志力薄弱",
                career: "能力未得到充分发挥，需要进修，避免骄傲",
                love: "感情操控，不够真诚，需要真实面对",
                health: "注意力不集中，能量分散，需要调整"
            },
            funFact: "🌟 魔术师的桌子上的物品代表着四大元素：火、水、气、土！"
        },
        {
            name: "女祭司 👑",
            number: 2,
            image: "👑",
            upright: {
                meaning: "直觉，神秘，内在知识，潜意识觉醒",
                career: "深入研究，独立工作，专业发展，智慧决策",
                love: "保持神秘感，倾听内心声音，感知力敏锐",
                health: "关注心理健康，保持冥想，内在平衡"
            },
            reversed: {
                meaning: "隐藏的秘密，直觉被忽视，表里不一",
                career: "忽视内心声音，决策犹豫，缺乏洞察力",
                love: "感情困惑，无法敞开心扉，不够真诚",
                health: "需要更多休息和自我关照，心理压力大"
            },
            funFact: "🌙 女祭司象征着月亮的神秘力量，代表着潜意识的智慧！"
        },
        {
            name: "女皇 👸",
            number: 3,
            image: "👸",
            upright: {
                meaning: "丰饶，母性，创造力，自然之美",
                career: "项目成熟，收获成果，创意丰富",
                love: "感情丰富，关系和谐，充满关爱",
                health: "身心舒适，充满活力，生机勃勃"
            },
            reversed: {
                meaning: "依赖，创造力受阻，过度保护",
                career: "项目延迟，缺乏进展，创意枯竭",
                love: "感情空虚，缺乏安全感，过度依赖",
                health: "需要调整生活方式，缺乏活力"
            },
            funFact: "🌺 女皇牌中的花园象征着生命的繁盛与创造力！"
        },
        {
            name: "皇帝 👑",
            number: 4,
            image: "👑",
            upright: {
                meaning: "权威，领导力，稳定，秩序",
                career: "获得领导地位，事业稳定，规划有序",
                love: "稳固的关系，可靠的伴侣，责任感强",
                health: "规律作息，保持健康，自律自控"
            },
            reversed: {
                meaning: "专制，固执，失控，缺乏弹性",
                career: "权力斗争，决策失误，过于强硬",
                love: "控制欲过强，关系紧张，缺乏包容",
                health: "压力过大，需要放松，过度紧张"
            },
            funFact: "⚔️ 皇帝手持权杖，象征着理性与规则的力量！"
        },
        {
            name: "教皇 🕊️",
            number: 5,
            image: "🕊️",
            upright: {
                meaning: "精神指引，传统，信仰，教导",
                career: "得到指导，遵循传统，道德标准",
                love: "传统关系，价值观契合，精神共鸣",
                health: "心灵平和，信念坚定，内在和谐"
            },
            reversed: {
                meaning: "教条，束缚，反叛，质疑信仰",
                career: "质疑权威，寻求突破，违背传统",
                love: "价值观冲突，需要妥协，信任危机",
                health: "需要突破固有观念，心灵困惑"
            },
            funFact: "📿 教皇代表着精神世界的指引和智慧的传承！"
        },
        {
            name: "恋人 💑",
            number: 6,
            image: "💑",
            upright: {
                meaning: "和谐，选择，爱情，合作关系",
                career: "合作顺利，重要抉择，团队和谐",
                love: "浪漫之恋，感情和谐，真诚相爱",
                health: "情绪稳定，心情愉悦，充满活力"
            },
            reversed: {
                meaning: "不和谐，犹豫不决，关系失衡",
                career: "合作困难，决策混乱，团队矛盾",
                love: "感情矛盾，需要抉择，信任缺失",
                health: "情绪波动，需要平衡，内心纷乱"
            },
            funFact: "💕 恋人牌象征着选择与和谐，暗示着生命中的重要决定！"
        },
        {
            name: "战车 🏃",
            number: 7,
            image: "🏃",
            upright: {
                meaning: "胜利，意志力，自我掌控，前进动力",
                career: "事业进展顺利，目标达成，克服障碍",
                love: "感情主动，把握方向，关系进展顺利",
                health: "充满活力，意志坚定，克服健康问题"
            },
            reversed: {
                meaning: "失控，方向迷失，冲动，自我怀疑",
                career: "计划受阻，方向不明，需要调整策略",
                love: "感情失控，缺乏方向，需要冷静思考",
                health: "精力分散，需要调整，避免过度疲劳"
            },
            funFact: "🛡️ 战车由两只不同颜色的狮身人面兽拉动，象征着内在力量的平衡！"
        },
        {
            name: "力量 🦁",
            number: 8,
            image: "🦁",
            upright: {
                meaning: "内在力量，勇气，耐心，温柔的力量",
                career: "以柔克刚，展现实力，克服困难",
                love: "以爱克服困难，关系成长，互相扶持",
                health: "保持内在平衡，心态积极，恢复能力强"
            },
            reversed: {
                meaning: "自我怀疑，软弱，急躁，缺乏信心",
                career: "信心不足，缺乏耐心，需要提升自信",
                love: "缺乏勇气，感情脆弱，需要增强信心",
                health: "内心焦虑，需要调节，保持平和"
            },
            funFact: "🌟 力量牌中女子温柔地驯服狮子，象征着柔和力量战胜蛮力！"
        },
        {
            name: "隐士 🏮",
            number: 9,
            image: "🏮",
            upright: {
                meaning: "内省，智慧，独处，寻找真理",
                career: "独立思考，深入研究，专注发展",
                love: "理性思考，需要空间，自我认知",
                health: "静心修养，注重内在，心灵成长"
            },
            reversed: {
                meaning: "孤独，封闭，迷失，过度孤立",
                career: "与团队脱节，过于孤立，需要交流",
                love: "过度封闭，难以沟通，需要开放",
                health: "社交焦虑，需要开放，寻求帮助"
            },
            funFact: "🕯️ 隐士手中的灯象征着在黑暗中指引方向的智慧之光！"
        },
        {
            name: "命运之轮 🎡",
            number: 10,
            image: "🎡",
            upright: {
                meaning: "转机，机遇，命运变化，周期循环",
                career: "事业转折，好运降临，把握机会",
                love: "缘分降临，关系转变，新的可能",
                health: "转危为安，改善健康，运势好转"
            },
            reversed: {
                meaning: "厄运，阻碍，停滞，抗拒改变",
                career: "计划受阻，运势低迷，需要等待",
                love: "感情受阻，缘分未到，保持耐心",
                health: "健康波动，需要关注，保持乐观"
            },
            funFact: "🌀 命运之轮永远在转动，提醒我们变化是生命的永恒主题！"
        },
        {
            name: "正义 ⚖️",
            number: 11,
            image: "⚖️",
            upright: {
                meaning: "公平，正义，真理，因果平衡",
                career: "公平对待，合理决策，正当收获",
                love: "诚实相待，关系平等，互相尊重",
                health: "身心平衡，保持正直，健康和谐"
            },
            reversed: {
                meaning: "不公，偏见，失衡，欺骗",
                career: "遭遇不公，需要维权，谨防欺诈",
                love: "关系不平等，需要调整，避免欺骗",
                health: "身心失衡，需要调节，保持正直"
            },
            funFact: "⚔️ 正义女神的天平象征着因果报应的永恒法则！"
        },
        {
            name: "倒吊人 🙃",
            number: 12,
            image: "🙃",
            upright: {
                meaning: "牺牲，新视角，智慧，放下执着",
                career: "改变思维，另辟蹊径，获得启发",
                love: "以新角度看待感情，学会放下",
                health: "调整生活方式，改变习惯，获得平衡"
            },
            reversed: {
                meaning: "无谓牺牲，固执，停滞，无法放下",
                career: "徒劳无功，需要改变，突破思维",
                love: "感情受困，需要放手，改变视角",
                health: "压力过大，需要放松，改变习惯"
            },
            funFact: "🌳 倒吊人倒立的姿势象征着从不同角度看待世界的智慧！"
        },
        {
            name: "死神 💀",
            number: 13,
            image: "💀",
            upright: {
                meaning: "转变，结束与新生，必要的改变，蜕变",
                career: "职业转型，结束旧工作，开启新机遇",
                love: "关系转变，旧爱结束，新的感情机会",
                health: "生活方式的改变，戒掉旧习惯，健康转折点"
            },
            reversed: {
                meaning: "停滞，抗拒改变，无法放手，恐惧转变",
                career: "不愿改变现状，错过机会，需要突破",
                love: "无法放下过去，沉溺旧情，需要勇气",
                health: "不愿改变不良习惯，健康隐患需注意"
            },
            funFact: "🌱 死神牌象征的不是终结，而是新生的开始，就像凤凰涅槃！"
        },
        {
            name: "节制 🌊",
            number: 14,
            image: "🌊",
            upright: {
                meaning: "平衡，调和，耐心，适度",
                career: "工作生活平衡，稳步发展，循序渐进",
                love: "感情稳定发展，互相理解，和谐相处",
                health: "保持平衡，饮食有度，心态平和"
            },
            reversed: {
                meaning: "失衡，极端，缺乏耐心，过度",
                career: "工作失衡，急于求成，需要调整",
                love: "感情失调，缺乏包容，需要平衡",
                health: "作息不规律，饮食失调，需要节制"
            },
            funFact: "💧 节制天使一只脚踏水一只脚踏地，象征着完美的平衡！"
        },
        {
            name: "恶魔 😈",
            number: 15,
            image: "😈",
            upright: {
                meaning: "欲望，执着，束缚，物质主义",
                career: "过度追求物质，工作压力大，陷入困境",
                love: "沉迷情欲，控制欲强，关系受困",
                health: "不良习惯，过度放纵，需要节制"
            },
            reversed: {
                meaning: "摆脱束缚，觉醒，克服诱惑",
                career: "突破困境，摆脱压力，重获自由",
                love: "打破不健康关系，重获自由，克服依赖",
                health: "戒除恶习，重获健康，心灵自由"
            },
            funFact: "⛓️ 恶魔牌提醒我们要警惕物质和欲望的束缚！"
        },
        {
            name: "高塔 🗼",
            number: 16,
            image: "🗼",
            upright: {
                meaning: "突变，崩塌，意外，启示",
                career: "计划受挫，突发变故，需要重建",
                love: "关系动荡，突然分离，重大转变",
                health: "突发状况，需要警惕，及时调整"
            },
            reversed: {
                meaning: "避免灾难，重建，转机",
                career: "预防风险，及时调整，化险为夷",
                love: "避免分离，修复关系，重建信任",
                health: "预防疾病，及时治疗，转危为安"
            },
            funFact: "⚡ 高塔被闪电击中，象征着命运的突然改变！"
        },
        {
            name: "星星 ⭐",
            number: 17,
            image: "⭐",
            upright: {
                meaning: "希望，启发，灵感，指引",
                career: "充满希望，有新灵感，前途光明",
                love: "浪漫希望，感情升温，充满憧憬",
                health: "康复希望，充满活力，心情愉悦"
            },
            reversed: {
                meaning: "失望，迷失方向，缺乏信心",
                career: "理想破灭，方向迷失，需要信心",
                love: "希望落空，感情受挫，需要信念",
                health: "情绪低落，缺乏动力，需要鼓励"
            },
            funFact: "✨ 星星牌中的八颗星象征着宇宙的完美和谐！"
        },
        {
            name: "月亮 🌙",
            number: 18,
            image: "🌙",
            upright: {
                meaning: "直觉，幻想，迷惑，潜意识",
                career: "充满不确定，需要谨慎，相信直觉",
                love: "感情迷惘，需要澄清，保持警惕",
                health: "情绪起伏，睡眠不安，需要关注"
            },
            reversed: {
                meaning: "澄清，真相大白，摆脱幻觉",
                career: "真相显现，明确方向，走出迷惘",
                love: "误会消除，关系明朗，重获清晰",
                health: "症状明确，走出阴霾，恢复平静"
            },
            funFact: "🌊 月亮牌的小径通向未知，象征着探索内心的旅程！"
        },
        {
            name: "太阳 ☀️",
            number: 19,
            image: "☀️",
            upright: {
                meaning: "快乐，成功，活力，光明",
                career: "事业有成，目标达成，充满活力",
                love: "感情美满，幸福快乐，充满阳光",
                health: "身体健康，精力充沛，心情愉悦"
            },
            reversed: {
                meaning: "暂时的阴霾，过度乐观，虚假的快乐",
                career: "表面繁荣，需要务实，警惕骄傲",
                love: "虚假幸福，需要真诚，避免表面",
                health: "掩饰问题，需要正视，及时调整"
            },
            funFact: "🌞 太阳牌中的孩子象征着纯真的喜悦和无忧无虑！"
        },
        {
            name: "审判 📯",
            number: 20,
            image: "📯",
            upright: {
                meaning: "觉醒，重生，召唤，新阶段",
                career: "事业转折，重大决定，新的开始",
                love: "感情升华，重新开始，灵魂契合",
                health: "浴火重生，康复转折，重获健康"
            },
            reversed: {
                meaning: "拒绝改变，错过机会，自我怀疑",
                career: "错失机会，犹豫不决，需要勇气",
                love: "错过缘分，无法释怀，需要放手",
                health: "延误治疗，无法接受，需要面对"
            },
            funFact: "🎺 审判牌的号角象征着灵魂的觉醒和重生！"
        },
        {
            name: "世界 🌍",
            number: 21,
            image: "🌍",
            upright: {
                meaning: "圆满，完成，成就，整合",
                career: "事业有成，目标达成，完美收官",
                love: "感情圆满，修成正果，幸福美满",
                health: "身心和谐，恢复健康，达到平衡"
            },
            reversed: {
                meaning: "未完成，拖延，缺乏收尾",
                career: "项目延期，目标未达，需要坚持",
                love: "感情未满，关系未定，需要努力",
                health: "康复未完，需要耐心，继续调养"
            },
            funFact: "🌟 世界牌是大阿尔卡纳的最后一张，象征着旅程的圆满完成！"
        }
    ],
    minorArcana: {
        cups: [
            {
                name: "圣杯王牌 🏆",
                number: 1,
                image: "🏆",
                upright: {
                    meaning: "新的感情开始，创意迸发，精神愉悦",
                    career: "创意工作顺利，新项目启动，灵感充沛",
                    love: "新恋情开始，感情清新甜蜜，充满希望",
                    health: "情绪积极，心情愉悦，充满活力"
                },
                reversed: {
                    meaning: "情感枯竭，创意受阻，精神疲惫",
                    career: "创意枯竭，项目受阻，需要休息",
                    love: "感情不顺，缺乏激情，需要调整",
                    health: "情绪低落，需要调节，注意休息"
                },
                funFact: "💖 圣杯王牌象征着爱与创造力的源泉！"
            },
            {
                name: "圣杯二 💑",
                number: 2,
                image: "💑",
                upright: {
                    meaning: "伙伴关系，和谐，互相吸引，合作",
                    career: "良好合作，团队和谐，共同发展",
                    love: "甜蜜恋情，两情相悦，感情和睦",
                    health: "身心平衡，心情愉快，保持和谐"
                },
                reversed: {
                    meaning: "关系不和，分离，缺乏合作",
                    career: "合作困难，团队矛盾，需要沟通",
                    love: "感情不和，分歧增多，需要包容",
                    health: "情绪波动，需要调节，保持平和"
                },
                funFact: "🕊️ 圣杯二展现了完美的感情和谐！"
            },
            {
                name: "圣杯三 🎭",
                number: 3,
                image: "🎭",
                upright: {
                    meaning: "欢庆，喜悦，团聚，共同庆祝",
                    career: "团队成功，共同庆祝，氛围融洽",
                    love: "感情甜蜜，共享快乐，社交活跃",
                    health: "心情愉悦，身心舒畅，保持活力"
                },
                reversed: {
                    meaning: "过度放纵，孤独，庆祝过度",
                    career: "团队矛盾，配合不当，需要节制",
                    love: "感情疲惫，社交压力，需要独处",
                    health: "作息不规律，需要节制，注意休息"
                },
                funFact: "🎭 圣杯三象征着共同庆祝的欢乐时光！"
            },
            {
                name: "圣杯四 🏠",
                number: 4,
                image: "🏠",
                upright: {
                    meaning: "倦怠，停滞，自我反省，不满足",
                    career: "工作倦怠，需要调整，寻找方向",
                    love: "感情平淡，需要突破，寻找新意",
                    health: "情绪低落，需要调节，保持运动"
                },
                reversed: {
                    meaning: "新的方向，改变，行动力恢复",
                    career: "突破瓶颈，找到方向，重获动力",
                    love: "感情更新，重拾激情，突破现状",
                    health: "走出低谷，恢复活力，保持积极"
                },
                funFact: "🌅 圣杯四提醒我们要跳出舒适圈，寻找新的可能！"
            },
            {
                name: "圣杯五 💔",
                number: 5,
                image: "💔",
                upright: {
                    meaning: "失望，悲伤，遗憾，情感受挫",
                    career: "项目受挫，计划失败，需要调整",
                    love: "感情受伤，失望难过，需要疗愈",
                    health: "情绪低落，压力大，需要关爱"
                },
                reversed: {
                    meaning: "接受现实，重新振作，走出阴霾",
                    career: "吸取教训，重新开始，东山再起",
                    love: "修复创伤，重获希望，放下过去",
                    health: "情绪恢复，走出低谷，保持乐观"
                },
                funFact: "🌈 圣杯五教导我们在失望中寻找新的希望！"
            },
            {
                name: "圣杯六 👶",
                number: 6,
                image: "👶",
                upright: {
                    meaning: "怀旧，童真，纯真回忆，温暖",
                    career: "旧友相助，温暖回报，贵人相助",
                    love: "纯真之爱，美好回忆，重拾甜蜜",
                    health: "保持童心，心态年轻，充满活力"
                },
                reversed: {
                    meaning: "沉溺过去，无法前进，停滞不前",
                    career: "固守旧习，难以创新，需要突破",
                    love: "执着过去，无法放手，需要前进",
                    health: "心态老化，缺乏活力，需要调整"
                },
                funFact: "🎠 圣杯六让我们重温童年的纯真与快乐！"
            },
            {
                name: "圣杯七 🌈",
                number: 7,
                image: "🌈",
                upright: {
                    meaning: "选择，机会，幻想，多种可能",
                    career: "多个选择，机会众多，需要决断",
                    love: "感情选择，理想追求，憧憬未来",
                    health: "尝试新法，多种方案，保持开放"
                },
                reversed: {
                    meaning: "迷茫，犹豫不决，现实与幻想",
                    career: "选择困难，决策混乱，需要明确",
                    love: "感情迷惘，理想幻灭，需要务实",
                    health: "方向不明，需要专注，避免分心"
                },
                funFact: "🎭 圣杯七展现了人生选择的多样性！"
            },
            {
                name: "圣杯八 🚶",
                number: 8,
                image: "🚶",
                upright: {
                    meaning: "放弃现状，寻找新路，心灵之旅",
                    career: "转换跑道，寻找方向，追求理想",
                    love: "放下旧爱，寻找真爱，心灵成长",
                    health: "改变习惯，寻求突破，心灵净化"
                },
                reversed: {
                    meaning: "犹豫不前，害怕改变，安于现状",
                    career: "不敢改变，错失机会，需要勇气",
                    love: "徘徊不前，无法抉择，需要决断",
                    health: "惯性生活，缺乏改变，需要行动"
                },
                funFact: "🌙 圣杯八象征着追寻心灵的旅程！"
            },
            {
                name: "圣杯九 🎊",
                number: 9,
                image: "🎊",
                upright: {
                    meaning: "满足，圆满，愿望达成，幸福",
                    career: "事业有成，目标达成，收获满满",
                    love: "感情圆满，心想事成，幸福美满",
                    health: "身心愉悦，保持健康，心情舒畅"
                },
                reversed: {
                    meaning: "表面满足，内心空虚，虚假幸福",
                    career: "表面繁荣，内部空虚，需要充实",
                    love: "虚假幸福，缺乏真实，需要诚实",
                    health: "外强中干，需要调养，注意内在"
                },
                funFact: "🌟 圣杯九代表着愿望实现的喜悦！"
            },
            {
                name: "圣杯十 👨‍👩‍👧‍👦",
                number: 10,
                image: "👨‍👩‍👧‍👦",
                upright: {
                    meaning: "家庭幸福，圆满，和谐，团圆",
                    career: "事业有成，家庭和睦，生活平衡",
                    love: "家庭美满，感情稳定，幸福和谐",
                    health: "家人关爱，心情愉悦，健康幸福"
                },
                reversed: {
                    meaning: "家庭矛盾，不和谐，失去平衡",
                    career: "工作家庭失衡，压力大，需要调整",
                    love: "家庭问题，感情危机，需要修复",
                    health: "家庭压力，情绪低落，需要调节"
                },
                funFact: "🏠 圣杯十展现了完美家庭的幸福图景！"
            }
        ],
        
        wands: [
            {
                name: "权杖王牌 🔥",
                number: 1,
                image: "🔥",
                upright: {
                    meaning: "新的开始，创造力，灵感，热情",
                    career: "新项目启动，充满干劲，事业起步",
                    love: "热情似火，激情四射，主动追求",
                    health: "精力充沛，活力四射，充满动力"
                },
                reversed: {
                    meaning: "延迟，缺乏动力，创意受阻",
                    career: "项目延迟，动力不足，需要激励",
                    love: "激情消退，缺乏动力，需要调整",
                    health: "精力不足，提不起劲，需要休息"
                },
                funFact: "⚡ 权杖王牌象征着新的机遇和无限潜能！"
            },
            {
                name: "权杖二 🤝",
                number: 2,
                image: "🤝",
                upright: {
                    meaning: "平衡选择，决策时刻，等待时机",
                    career: "权衡利弊，慎重决策，把握机会",
                    love: "感情抉择，等待时机，保持平衡",
                    health: "调节平衡，适度运动，注意节奏"
                },
                reversed: {
                    meaning: "犹豫不决，拖延，错失良机",
                    career: "决策延误，机会流失，需要果断",
                    love: "举棋不定，错过良机，需要决断",
                    health: "作息不规律，缺乏规划，需要调整"
                },
                funFact: "⚖️ 权杖二提醒我们在选择时要保持平衡！"
            },
            {
                name: "权杖三 🌱",
                number: 3,
                image: "🌱",
                upright: {
                    meaning: "扩展，成长，冒险，探索新机会",
                    career: "事业扩展，寻找机会，开拓市场",
                    love: "感情发展，探索可能，扩展社交",
                    health: "尝试新运动，保持活力，健康成长"
                },
                reversed: {
                    meaning: "过度扩张，分散注意力，缺乏规划",
                    career: "盲目扩张，资源分散，需要聚焦",
                    love: "感情不专一，精力分散，需要专注",
                    health: "过度消耗，需要节制，合理规划"
                },
                funFact: "🌳 权杖三象征着生命力的蓬勃发展！"
            },
            {
                name: "权杖四 🏰",
                number: 4,
                image: "🏰",
                upright: {
                    meaning: "稳固基础，庆祝成功，巩固成果",
                    career: "事业稳定，成果显现，基础牢固",
                    love: "感情稳定，共同庆祝，关系巩固",
                    health: "保持稳定，养成习惯，健康基础"
                },
                reversed: {
                    meaning: "不安定，缺乏安全感，基础不稳",
                    career: "地位不稳，需要加强，巩固基础",
                    love: "关系不稳，需要维护，加强沟通",
                    health: "作息不稳，需要调整，建立规律"
                },
                funFact: "🏰 权杖四提醒我们要建立稳固的基础！"
            },
            {
                name: "权杖五 ⚔️",
                number: 5,
                image: "⚔️",
                upright: {
                    meaning: "竞争，挑战，冲突，考验",
                    career: "职场竞争，面临挑战，需要应对",
                    love: "感情竞争，关系考验，需要智慧",
                    health: "面临压力，需要调节，克服困难"
                },
                reversed: {
                    meaning: "避免冲突，内部矛盾，消极对抗",
                    career: "内耗严重，避免冲突，寻求合作",
                    love: "感情纷争，需要和解，避免对抗",
                    health: "内心冲突，需要平和，调节身心"
                },
                funFact: "⚔️ 权杖五教导我们如何在竞争中成长！"
            },
            {
                name: "权杖六 🎯",
                number: 6,
                image: "🎯",
                upright: {
                    meaning: "胜利，成功，荣誉，认可",
                    career: "事业有成，获得认可，团队胜利",
                    love: "感情顺遂，得到认可，关系和谐",
                    health: "恢复健康，保持状态，充满活力"
                },
                reversed: {
                    meaning: "骄傲自满，过度自信，期望过高",
                    career: "功高自傲，需要谦虚，警惕骄傲",
                    love: "自我膨胀，需要谦逊，保持真诚",
                    health: "轻视健康，需要警惕，保持谨慎"
                },
                funFact: "🏆 权杖六代表着努力后的胜利果实！"
            },
            {
                name: "权杖七 🛡️",
                number: 7,
                image: "🛡️",
                upright: {
                    meaning: "防守，坚持，勇气，面对挑战",
                    career: "坚守立场，面对挑战，保持勇气",
                    love: "守护感情，克服困难，保持信念",
                    health: "抵抗疾病，保持意志，坚持锻炼"
                },
                reversed: {
                    meaning: "畏缩不前，退缩，放弃抵抗",
                    career: "退缩逃避，失去立场，需要勇气",
                    love: "逃避问题，放弃感情，需要担当",
                    health: "意志消沉，放弃锻炼，需要坚持"
                },
                funFact: "🗡️ 权杖七展现了面对挑战时的勇气！"
            },
            {
                name: "权杖八 ✈️",
                number: 8,
                image: "✈️",
                upright: {
                    meaning: "快速行动，进展，消息，变化",
                    career: "事业进展，快速发展，好消息来临",
                    love: "感情进展，积极发展，喜讯传来",
                    health: "恢复迅速，状态改善，充满活力"
                },
                reversed: {
                    meaning: "延迟，阻碍，进展缓慢，坏消息",
                    career: "发展受阻，进度延迟，需要耐心",
                    love: "感情停滞，进展不顺，需要等待",
                    health: "恢复缓慢，需要耐心，保持信心"
                },
                funFact: "🚀 权杖八象征着快速的变化与进展！"
            },
            {
                name: "权杖九 💪",
                number: 9,
                image: "💪",
                upright: {
                    meaning: "准备就绪，防御，力量储备",
                    career: "充分准备，实力雄厚，蓄势待发",
                    love: "感情稳固，互相支持，共同进步",
                    health: "体能充沛，储备能量，保持状态"
                },
                reversed: {
                    meaning: "力不从心，准备不足，防线脆弱",
                    career: "准备不足，实力欠缺，需要加强",
                    love: "感情脆弱，缺乏支持，需要加强",
                    health: "体能不足，需要调养，加强锻炼"
                },
                funFact: "🛡️ 权杖九提醒我们要做好充分的准备！"
            },
            {
                name: "权杖十 📦",
                number: 10,
                image: "📦",
                upright: {
                    meaning: "负担，责任，压力，重担",
                    career: "责任重大，压力巨大，需要承担",
                    love: "感情负担，责任加重，需要担当",
                    health: "压力过大，需要释放，注意调节"
                },
                reversed: {
                    meaning: "放下包袱，解脱，摆脱负担",
                    career: "卸下重担，减轻压力，轻装上阵",
                    love: "放下包袱，减轻负担，重获自由",
                    health: "压力释放，心情轻松，恢复活力"
                },
                funFact: "🎒 权杖十告诉我们要学会适时放下！"
            },
            {
                name: "权杖侍从 👦",
                number: 11,
                image: "👦",
                upright: {
                    meaning: "新消息，冒险精神，热情洋溢，学习探索",
                    career: "新的机会，学习成长，充满热情",
                    love: "恋爱萌芽，热情追求，充满活力",
                    health: "充满活力，积极向上，保持运动"
                },
                reversed: {
                    meaning: "消息延迟，缺乏热情，行动力不足",
                    career: "机会错过，动力不足，需要激励",
                    love: "激情消退，缺乏行动，需要突破",
                    health: "精力不足，缺乏动力，需要调整"
                },
                funFact: "🌱 权杖侍从象征着新的开始和无限可能！"
            },
            {
                name: "权杖骑士 🏇",
                number: 12,
                image: "🏇",
                upright: {
                    meaning: "行动力强，冒险进取，充满激情，快速发展",
                    career: "事业进取，快速发展，勇往直前",
                    love: "热情追求，积极行动，感情升温",
                    health: "活力充沛，运动积极，恢复迅速"
                },
                reversed: {
                    meaning: "鲁莽冲动，行动过急，缺乏计划",
                    career: "操之过急，欠缺规划，需要冷静",
                    love: "感情冲动，缺乏耐心，需要沉稳",
                    health: "过度消耗，需要休息，注意节制"
                },
                funFact: "🐎 权杖骑士展现了青春的活力与冲劲！"
            },
            {
                name: "权杖皇后 👸",
                number: 13,
                image: "👸",
                upright: {
                    meaning: "魅力四射，创造力强，领导能力，热情似火",
                    career: "领导才能，创意丰富，团队和谐",
                    love: "感情和谐，充满魅力，关系稳定",
                    health: "保持活力，心态阳光，充满能量"
                },
                reversed: {
                    meaning: "控制欲强，情绪化，缺乏耐心",
                    career: "管理不当，情绪影响，需要平和",
                    love: "感情专制，过度情绪，需要包容",
                    health: "情绪波动，能量失衡，需要调节"
                },
                funFact: "👑 权杖皇后象征着成熟的领导力与创造力！"
            },
            {
                name: "权杖国王 👑",
                number: 14,
                image: "👑",
                upright: {
                    meaning: "事业有成，领导才能，创业精神，成熟稳重",
                    career: "事业成功，统领全局，决策果断",
                    love: "感情成熟，责任担当，关系稳定",
                    health: "精力充沛，自我管理，保持健康"
                },
                reversed: {
                    meaning: "专制独断，傲慢自大，缺乏包容",
                    career: "独断专行，过于强势，需要民主",
                    love: "感情专制，缺乏体谅，需要沟通",
                    health: "压力过大，需要放松，注意调节"
                },
                funFact: "👑 权杖国王代表着成熟的领导力与事业成就！"
            }
        ],
        
        swords: [
            {
                name: "宝剑王牌 ⚔️",
                number: 1,
                image: "⚔️",
                upright: {
                    meaning: "清晰思维，真理，突破，胜利",
                    career: "思路清晰，决策准确，突破困境",
                    love: "理性思考，明确方向，果断行动",
                    health: "头脑清醒，判断准确，保持警觉"
                },
                reversed: {
                    meaning: "混乱，困惑，决策失误",
                    career: "思维混乱，判断失误，需要冷静",
                    love: "感情混乱，决策错误，需要理性",
                    health: "精神紧张，压力大，需要放松"
                },
                funFact: "🗡️ 宝剑王牌代表着思维的力量和真理的追求！"
            },
            {
                name: "宝剑二 ⚖️",
                number: 2,
                image: "⚖️",
                upright: {
                    meaning: "平衡，决策，两难，内心和解",
                    career: "权衡利弊，理性决策，寻求平衡",
                    love: "感情抉择，理性分析，保持中立",
                    health: "身心平衡，调节作息，保持冷静"
                },
                reversed: {
                    meaning: "优柔寡断，失衡，内心矛盾",
                    career: "决策困难，失去平衡，需要果断",
                    love: "犹豫不决，矛盾重重，需要抉择",
                    health: "失眠焦虑，身心失调，需要调节"
                },
                funFact: "⚖️ 宝剑二的蒙眼女子象征着理性的平衡与抉择！"
            },
            {
                name: "宝剑三 💔",
                number: 3,
                image: "💔",
                upright: {
                    meaning: "心痛，背叛，失落，悲伤",
                    career: "遭遇背叛，计划受挫，信任危机",
                    love: "感情受伤，背叛分离，心灵创伤",
                    health: "心理压力，情绪低落，需要疗愈"
                },
                reversed: {
                    meaning: "恢复，痊愈，走出阴霾",
                    career: "化解矛盾，重建信任，东山再起",
                    love: "修复创伤，重获新生，放下过去",
                    health: "走出抑郁，心情好转，积极康复"
                },
                funFact: "🌅 宝剑三提醒我们伤痛之后总有新的黎明！"
            },
            {
                name: "宝剑四 🛏️",
                number: 4,
                image: "🛏️",
                upright: {
                    meaning: "休息，恢复，沉思，疗愈",
                    career: "暂时休整，调整状态，蓄势待发",
                    love: "感情沉淀，独处思考，心灵休憩",
                    health: "充分休息，恢复体力，调养身心"
                },
                reversed: {
                    meaning: "焦虑，不安，无法休息",
                    career: "过度疲劳，无法放松，需要休息",
                    love: "感情困扰，难以平静，需要沉淀",
                    health: "失眠多梦，精神紧张，需要放松"
                },
                funFact: "🌙 宝剑四教导我们休息也是人生的重要部分！"
            },
            {
                name: "宝剑五 ⚔️",
                number: 5,
                image: "⚔️",
                upright: {
                    meaning: "冲突，争斗，失败，挫折",
                    career: "竞争激烈，遭遇挫折，需要应对",
                    love: "感情纷争，矛盾冲突，关系紧张",
                    health: "身心疲惫，压力巨大，需要调节"
                },
                reversed: {
                    meaning: "化解，和解，克服困难",
                    career: "化解矛盾，渡过难关，重获机会",
                    love: "修复关系，化解矛盾，重建信任",
                    health: "压力缓解，状态改善，恢复健康"
                },
                funFact: "🗡️ 宝剑五提醒我们要学会化解冲突！"
            },
            {
                name: "宝剑六 🚣",
                number: 6,
                image: "🚣",
                upright: {
                    meaning: "转机，过渡，离开，改变",
                    career: "转换工作，改变环境，寻求突破",
                    love: "感情转折，重新开始，放下过去",
                    health: "康复转机，改善状况，走出低谷"
                },
                reversed: {
                    meaning: "停滞，犹豫，无法改变",
                    career: "裹足不前，难以改变，需要勇气",
                    love: "难以放手，无法前进，需要决断",
                    health: "恢复缓慢，状态不佳，需要耐心"
                },
                funFact: "⛵ 宝剑六的小船象征着人生的重要转折！"
            },
            {
                name: "宝剑七 🎭",
                number: 7,
                image: "🎭",
                upright: {
                    meaning: "策略，计划，隐藏，谨慎",
                    career: "战略部署，谨慎行事，制定计划",
                    love: "策略交往，保持距离，谨慎对待",
                    health: "合理规划，循序渐进，稳步恢复"
                },
                reversed: {
                    meaning: "计划失败，暴露，草率",
                    career: "计划受挫，策略失败，需要调整",
                    love: "真相大白，关系揭露，需要坦诚",
                    health: "计划中断，进展不顺，需要变通"
                },
                funFact: "🎯 宝剑七教导我们要懂得运用智慧！"
            },
            {
                name: "宝剑八 🔒",
                number: 8,
                image: "🔒",
                upright: {
                    meaning: "困境，束缚，限制，压力",
                    career: "陷入困境，受到限制，压力重重",
                    love: "感情受困，关系束缚，无法突破",
                    health: "身心受限，压力过大，需要解脱"
                },
                reversed: {
                    meaning: "解脱，突破，摆脱束缚",
                    career: "突破困境，摆脱限制，重获自由",
                    love: "打破束缚，重获自由，关系突破",
                    health: "压力释放，状态改善，走出困境"
                },
                funFact: "🗝️ 宝剑八提醒我们要勇于打破束缚！"
            },
            {
                name: "宝剑九 😔",
                number: 9,
                image: "😔",
                upright: {
                    meaning: "噩梦，忧虑，恐惧，焦虑",
                    career: "担忧未来，压力重重，内心焦虑",
                    love: "感情困扰，忧心忡忡，难以安眠",
                    health: "精神紧张，睡眠不佳，需要放松"
                },
                reversed: {
                    meaning: "走出阴霾，释放压力，康复",
                    career: "摆脱困扰，重获信心，压力缓解",
                    love: "走出阴影，重拾信心，感情好转",
                    health: "走出抑郁，精神改善，恢复健康"
                },
                funFact: "🌅 宝剑九告诉我们黑夜过后就是黎明！"
            },
            {
                name: "宝剑十 🗡️",
                number: 10,
                image: "🗡️",
                upright: {
                    meaning: "结束，失败，痛苦，终结",
                    career: "项目终止，计划失败，彻底改变",
                    love: "感情结束，痛苦分离，关系终止",
                    health: "身心俱疲，极度疲惫，需要休养"
                },
                reversed: {
                    meaning: "重生，新生，解脱，希望",
                    career: "浴火重生，重新开始，迎接转机",
                    love: "重获新生，放下过去，开启新章",
                    health: "渡过难关，重获健康，焕发新生"
                },
                funFact: "🦋 宝剑十象征着痛苦之后的重生！"
            },
            {
                name: "宝剑侍从 👦",
                number: 11,
                image: "👦",
                upright: {
                    meaning: "新想法，学习能力，观察敏锐，求知欲强",
                    career: "学习进取，思维活跃，充满好奇",
                    love: "理性分析，谨慎观察，保持清醒",
                    health: "保持警觉，注意观察，及时调整"
                },
                reversed: {
                    meaning: "思维混乱，观察不足，判断失误",
                    career: "学习困难，思维受阻，需要专注",
                    love: "判断错误，观察不足，需要理性",
                    health: "注意力散，精神紧张，需要放松"
                },
                funFact: "📚 宝剑侍从象征着求知欲望与学习精神！"
            },
            {
                name: "宝剑骑士 🏇",
                number: 12,
                image: "🏇",
                upright: {
                    meaning: "思维敏捷，行动果断，勇于挑战，直言不讳",
                    career: "决策果断，行动迅速，突破困境",
                    love: "坦诚相待，直接表达，勇于追求",
                    health: "反应敏捷，行动迅速，保持警觉"
                },
                reversed: {
                    meaning: "言行鲁莽，过于激进，缺乏考虑",
                    career: "决策草率，行动冲动，需要谨慎",
                    love: "言语伤人，行动莽撞，需要克制",
                    health: "精神紧张，行动过急，需要冷静"
                },
                funFact: "⚔️ 宝剑骑士展现了年轻的锐气与果断！"
            },
            {
                name: "宝剑皇后 👸",
                number: 13,
                image: "👸",
                upright: {
                    meaning: "智慧成熟，洞察力强，理性客观，独立自主",
                    career: "决策明智，判断准确，管理有方",
                    love: "理性成熟，明察秋毫，关系清晰",
                    health: "心智清晰，自我管理，保持平衡"
                },
                reversed: {
                    meaning: "刻薄尖锐，过度理性，缺乏温情",
                    career: "判断偏激，管理严苛，需要温和",
                    love: "感情冷漠，过于理性，需要温暖",
                    health: "精神紧张，压力过大，需要放松"
                },
                funFact: "🗡️ 宝剑皇后象征着成熟的智慧与洞察力！"
            },
            {
                name: "宝剑国王 👑",
                number: 14,
                image: "👑",
                upright: {
                    meaning: "理性权威，智慧领导，公正严明，思维清晰",
                    career: "领导有方，决策准确，统筹全局",
                    love: "理性主导，明确方向，关系稳定",
                    health: "心智成熟，自我约束，保持平衡"
                },
                reversed: {
                    meaning: "暴虐无情，过于严厉，缺乏人性",
                    career: "管理严苛，决策偏激，需要温和",
                    love: "感情冷酷，缺乏温情，需要关爱",
                    health: "精神压力，心理负担，需要释放"
                },
                funFact: "⚔️ 宝剑国王代表着成熟的判断力与领导力！"
            }
        ],
        
        pentacles: [
            {
                name: "金币王牌 💰",
                number: 1,
                image: "💰",
                upright: {
                    meaning: "物质机遇，财运，稳固基础，实际收获",
                    career: "事业机遇，财运亨通，稳步发展",
                    love: "稳定关系，物质保障，实际行动",
                    health: "身体健康，基础稳固，保养得当"
                },
                reversed: {
                    meaning: "错失机会，财务损失，不稳定",
                    career: "机会流失，财运不佳，需要稳健",
                    love: "物质纠纷，缺乏保障，需要务实",
                    health: "身体欠佳，基础不稳，需要调养"
                },
                funFact: "💎 金币王牌象征着物质世界的新机遇！"
            },
            {
                name: "金币二 🏦",
                number: 2,
                image: "🏦",
                upright: {
                    meaning: "平衡收支，财务规划，物质平衡，稳健发展",
                    career: "收支平衡，稳健经营，合理规划",
                    love: "共同规划，务实发展，互相扶持",
                    health: "均衡饮食，规律作息，保持平衡"
                },
                reversed: {
                    meaning: "财务失衡，入不敷出，物质匮乏",
                    career: "收支失衡，经营困难，需要节制",
                    love: "物质矛盾，经济压力，需要沟通",
                    health: "作息紊乱，饮食失调，需要调整"
                },
                funFact: "⚖️ 金币二教导我们要保持物质生活的平衡！"
            },
            {
                name: "金币三 🌳",
                number: 3,
                image: "🌳",
                upright: {
                    meaning: "技能合作，团队协作，事业发展，稳健成长",
                    career: "团队合作，技能提升，稳步发展",
                    love: "共同成长，互相扶持，关系稳定",
                    health: "保持锻炼，循序渐进，稳步提升"
                },
                reversed: {
                    meaning: "合作不顺，技能欠缺，发展受阻",
                    career: "团队矛盾，能力不足，需要学习",
                    love: "缺乏成长，互不理解，需要努力",
                    health: "懈怠懒散，缺乏锻炼，需要坚持"
                },
                funFact: "🌱 金币三象征着通过合作实现共同成长！"
            },
            {
                name: "金币四 💎",
                number: 4,
                image: "💎",
                upright: {
                    meaning: "稳固基础，储蓄积累，安全保障，物质稳定",
                    career: "稳定收入，积累财富，基础牢固",
                    love: "稳定关系，物质保障，共同积累",
                    health: "基础健康，保养得当，状态稳定"
                },
                reversed: {
                    meaning: "吝啬守财，过度保守，基础不稳",
                    career: "守旧不前，过度节俭，需要开放",
                    love: "物质至上，缺乏分享，需要慷慨",
                    health: "过度保守，缺乏活力，需要改变"
                },
                funFact: "💰 金币四提醒我们要建立稳固的物质基础！"
            },
            {
                name: "金币五 🏰",
                number: 5,
                image: "🏰",
                upright: {
                    meaning: "物质困难，暂时贫困，健康问题，考验",
                    career: "财务困难，事业低谷，需要坚持",
                    love: "物质压力，感情考验，共度难关",
                    health: "身体不适，需要调养，保持耐心"
                },
                reversed: {
                    meaning: "困境改善，转机来临，问题解决",
                    career: "困境好转，机会来临，渡过难关",
                    love: "压力缓解，共同进步，关系改善",
                    health: "康复转机，状态改善，恢复健康"
                },
                funFact: "🌅 金币五告诉我们困境之后就是黎明！"
            },
            {
                name: "金币六 🤝",
                number: 6,
                image: "🤝",
                upright: {
                    meaning: "慷慨施予，互惠互利，公平交易，收获回报",
                    career: "互利共赢，公平交易，收获回报",
                    love: "互相付出，共同付出，收获幸福",
                    health: "付出回报，保健有方，收获健康"
                },
                reversed: {
                    meaning: "吝啬自私，不公平交易，回报不足",
                    career: "得不偿失，交易不公，需要平衡",
                    love: "付出不均，关系失衡，需要调整",
                    health: "投入过度，回报不足，需要节制"
                },
                funFact: "🎁 金币六教导我们要学会付出与分享！"
            },
            {
                name: "金币七 🌾",
                number: 7,
                image: "🌾",
                upright: {
                    meaning: "耐心等待，稳健投资，收获在望，循序渐进",
                    career: "稳健发展，耐心积累，等待收获",
                    love: "感情培养，耐心等待，水到渠成",
                    health: "持续保养，耐心调理，稳步改善"
                },
                reversed: {
                    meaning: "投资失误，欠缺耐心，操之过急",
                    career: "急于求成，缺乏规划，需要耐心",
                    love: "缺乏耐心，急于求成，需要等待",
                    health: "急于求效，缺乏恒心，需要坚持"
                },
                funFact: "🌱 金币七提醒我们要有耐心等待收获！"
            },
            {
                name: "金币八 🛠️",
                number: 8,
                image: "🛠️",
                upright: {
                    meaning: "专注技能，精益求精，职业发展，专业提升",
                    career: "技能精进，专业发展，成就事业",
                    love: "专注经营，用心维护，感情升华",
                    health: "专注养生，持之以恒，保持健康"
                },
                reversed: {
                    meaning: "工作倦怠，技能生疏，发展受阻",
                    career: "能力退步，工作懈怠，需要提升",
                    love: "感情懈怠，缺乏投入，需要专注",
                    health: "保养不足，状态下滑，需要加强"
                },
                funFact: "⚒️ 金币八象征着通过专注实现卓越！"
            },
            {
                name: "金币九 🏆",
                number: 9,
                image: "🏆",
                upright: {
                    meaning: "物质富足，独立成功，个人成就，享受生活",
                    career: "事业有成，财务丰盈，独立自主",
                    love: "经济独立，生活美满，享受幸福",
                    health: "身心健康，生活优质，保养得当"
                },
                reversed: {
                    meaning: "物质主义，虚荣浮华，精神空虚",
                    career: "金钱至上，精神空虚，需要平衡",
                    love: "过于物质，缺乏真情，需要内省",
                    health: "外强中干，过度放纵，需要节制"
                },
                funFact: "👑 金币九展现了个人成就的辉煌！"
            },
            {
                name: "金币十 👨‍👩‍👧‍👦",
                number: 10,
                image: "👨‍👩‍👧‍👦",
                upright: {
                    meaning: "家族财富，世代传承，物质圆满，家庭幸福",
                    career: "家族事业，基业长青，财富传承",
                    love: "家庭美满，生活富足，幸福圆满",
                    health: "家族健康，养生有道，长寿安康"
                },
                reversed: {
                    meaning: "家族纷争，财产纠纷，家庭问题",
                    career: "家族矛盾，财务纠纷，需要调解",
                    love: "家庭危机，物质纷争，需要化解",
                    health: "家族隐患，健康问题，需要重视"
                },
                funFact: "🏰 金币十代表着家族的繁荣与传承！"
            },
            {
                name: "金币侍从 👦",
                number: 11,
                image: "👦",
                upright: {
                    meaning: "学习机会，务实态度，新的技能，实践精神",
                    career: "学习新技能，实习机会，脚踏实地",
                    love: "务实感情，稳步发展，循序渐进",
                    health: "养成习惯，保持锻炼，注重实践"
                },
                reversed: {
                    meaning: "学习困难，不切实际，懒散懈怠",
                    career: "学习态度差，不够务实，需要专注",
                    love: "缺乏行动，不够现实，需要实践",
                    health: "缺乏恒心，懒于锻炼，需要坚持"
                },
                funFact: "🌱 金币侍从象征着务实的学习精神！"
            },
            {
                name: "金币骑士 🏇",
                number: 12,
                image: "🏇",
                upright: {
                    meaning: "勤奋努力，稳步前进，实干精神，追求目标",
                    career: "努力工作，脚踏实地，稳步发展",
                    love: "认真经营，实际行动，稳定发展",
                    health: "坚持锻炼，保持规律，稳步提升"
                },
                reversed: {
                    meaning: "工作懈怠，进展缓慢，缺乏动力",
                    career: "效率低下，进展迟缓，需要努力",
                    love: "感情懈怠，缺乏行动，需要投入",
                    health: "锻炼不足，状态下滑，需要坚持"
                },
                funFact: "🐎 金币骑士展现了脚踏实地的奋斗精神！"
            },
            {
                name: "金币皇后 👸",
                number: 13,
                image: "👸",
                upright: {
                    meaning: "富足繁荣，实用智慧，经营能力，享受生活",
                    career: "事业有成，管理有方，收获丰盈",
                    love: "感情稳定，生活富足，关系和谐",
                    health: "保养得当，生活规律，健康优质"
                },
                reversed: {
                    meaning: "物质主义，铺张浪费，管理不善",
                    career: "挥霍无度，管理混乱，需要节制",
                    love: "过于物质，缺乏内涵，需要平衡",
                    health: "生活放纵，缺乏节制，需要管理"
                },
                funFact: "👑 金币皇后象征着成熟的理财与管理能力！"
            },
            {
                name: "金币国王 👑",
                number: 14,
                image: "👑",
                upright: {
                    meaning: "财富成就，商业头脑，稳健发展，实业家风范",
                    career: "事业有成，经营有方，稳健发展",
                    love: "稳定关系，经济基础，责任担当",
                    health: "健康管理，规律生活，保养有道"
                },
                reversed: {
                    meaning: "贪婪守财，固守成规，缺乏远见",
                    career: "守旧保守，缺乏创新，需要开放",
                    love: "物质至上，缺乏真情，需要平衡",
                    health: "保养过度，太过谨慎，需要放松"
                },
                funFact: "💰 金币国王代表着成熟的商业智慧与财富管理能力！"
            }
        ]
    },
    
    // 高级洗牌算法
    shuffleDeck: function() {
        const seed = Date.now() % 1000000;
        let deck = [...this.majorArcana, ...Object.values(this.minorArcana).flat()];
        
        // Fisher-Yates shuffle with seed
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(this._seededRandom(seed) * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        
        // 二次混淆
        return deck.sort(() => this._seededRandom(seed) - 0.5);
    },

    _seededRandom: function(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    },

    // 专业占卜解释生成器
    generateInterpretation: function(card, isReversed) {
        const orientation = isReversed ? 'reversed' : 'upright';
        const emojiMap = {
            advice: ["✨", "🔮", "💡", "🌟"],
            fact: ["🌙", "⚡", "🌌", "🔭"]
        };

        return {
            title: `${card.name} ${isReversed ? '🔀 逆位' : '🔼 正位'}`,
            meaning: `${card[orientation].meaning} ${this._randomEmoji(emojiMap.advice)}`,
            advice: `${card[orientation].advice} ${this._randomEmoji(emojiMap.advice)}`,
            fact: `神秘小知识：${card[orientation].fact} ${this._randomEmoji(emojiMap.fact)}`
        };
    },

    _randomEmoji: function(emojis) {
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
};

// 解读系统增强
class TarotReading {
    static analyzeCombination(cards) {
        let analysis = {
            overall: [],
            career: [],
            love: [],
            health: []
        };

        // 分析牌的组合关系
        this.analyzeCardPositions(cards, analysis);
        // 分析数字关系
        this.analyzeNumbers(cards, analysis);
        // 分析元素组合
        this.analyzeElements(cards, analysis);

        return analysis;
    }

    static analyzeCardPositions(cards, analysis) {
        // 过去-现在-未来的关系分析
        const [past, present, future] = cards;
        
        // 过去到现在的发展
        if (past.isReversed && !present.isReversed) {
            analysis.overall.push("从困境中逐渐走出，情况正在好转");
        }
        
        // 现在到未来的趋势
        if (!future.isReversed) {
            analysis.overall.push("未来发展趋势向好，保持当前方向");
        }

        // 更多详细的分析...
    }

    static analyzeNumbers(cards, analysis) {
        const numbers = cards.map(card => card.number);
        
        // 数字序列分析
        if (numbers.every(n => n < 10)) {
            analysis.overall.push("处于人生的学习和成长阶段");
        }
        
        if (numbers.some(n => n > 15)) {
            analysis.overall.push("即将迎来重要的转折点");
        }

        // 更多数字关系分析...
    }

    static analyzeElements(cards, analysis) {
        // 分析牌面元素组合
        // 可以根据牌号或特征来判断元素属性
        // 进行更详细的元素相生相克分析
    }
}

// 初始化占卜系统
class TarotSystem {
    constructor() {
        this.isReadingInProgress = false;
        this.currentReading = [];
        this.currentStep = -1; // 改为-1，表示还没有开始
        this.deck = [...tarotDeck.majorArcana, ...Object.values(tarotDeck.minorArcana).flat()];
        
        this.initializeElements();
        this.bindEvents();
        
        // 初始化时重置所有步骤
        this.resetSteps();
        
        // 初始化音乐播放器
        this.musicPlayer = new MusicPlayer();
    }

    initializeElements() {
        this.startButton = document.querySelector('#startBtn');
        this.ritualContainer = document.querySelector('#ritual-container');
        this.cardsContainer = document.querySelector('#cards-container');
        this.readingContainer = document.querySelector('#reading-container');
        this.ritualText = document.querySelector('#ritual-text');
        this.steps = document.querySelectorAll('.step');
        this.cardSlots = document.querySelectorAll('.card-slot');
        this.newReadingButton = document.querySelector('#new-reading');

        if (!this.startButton || !this.ritualContainer || !this.cardsContainer) {
            console.error('Required elements not found');
            return;
        }
    }

    bindEvents() {
        // 开始占卜按钮
        this.startButton.addEventListener('click', () => {
            if (!this.isReadingInProgress) {
                this.startRitual();
            }
        });

        // 卡牌点击事件
        this.cardSlots.forEach((slot, index) => {
            slot.addEventListener('click', () => {
                if (this.isReadingInProgress && !slot.classList.contains('flipped')) {
                    this.revealCard(slot, index);
                }
            });
        });

        // 新的占卜按钮
        this.newReadingButton.addEventListener('click', () => {
            this.resetReading();
        });
    }

    startRitual() {
        this.isReadingInProgress = true;
        
        // 开始时激活第一个步骤
        this.currentStep = 0;
        this.updateSteps();
        
        // 更新提示文本
        this.updateRitualText("请闭上眼睛，深呼吸，想着你想要解答的问题...");
        
        // 隐藏开始区域，显示卡牌区域
        setTimeout(() => {
            this.ritualContainer.classList.add('hidden');
            this.cardsContainer.classList.remove('hidden');
            this.updateSteps();
            
            // 添加卡牌入场动画
            AnimationManager.spreadCards();
            
            // 更新提示
            this.updateRitualText("请依次点击三张牌，分别代表：过去、现在、未来");
        }, 2000);
    }

    updateRitualText(text) {
        if (this.ritualText) {
            this.ritualText.textContent = text;
            AnimationManager.fadeInContent(this.ritualText);
        }
    }

    revealCard(slot, index) {
        if (slot.classList.contains('flipped')) {
            return;
        }

        const card = this.getRandomCard();
        card.isReversed = Math.random() < 0.5;
        this.currentReading[index] = card;

        // 更新卡牌内容
        const cardContent = slot.querySelector('.card-content');
        if (cardContent) {
            cardContent.innerHTML = `
                <div class="card-title">${card.name}</div>
                <div class="card-orientation">${card.isReversed ? '🔄 逆位' : '⬆️ 正位'}</div>
                <div class="card-meaning">${card[card.isReversed ? 'reversed' : 'upright'].meaning}</div>
            `;
        }

        // 添加翻牌动画
        slot.classList.add('flipped');

        // 更新步骤指示器
        this.currentStep = Math.min(this.currentStep + 1, this.steps.length - 1);
        this.updateSteps();

        // 检查是否所有卡牌都已翻开
        if (this.currentReading.filter(Boolean).length === 3) {
            setTimeout(() => this.showReading(), 1000);
        }
    }

    showReading() {
        this.readingContainer.classList.remove('hidden');
        const content = this.generateReadingContent();
        this.readingContainer.innerHTML = content;

        // 显示新的占卜按钮
        this.newReadingButton.classList.remove('hidden');

        // 添加结果展示动画
        AnimationManager.showReadingEffects(this.readingContainer);
    }

    generateReadingContent() {
        const positions = ['过去', '现在', '未来'];
        let content = '<h2>🌟 你的塔罗解读</h2>';
        
        this.currentReading.forEach((card, index) => {
            const orientation = card.isReversed ? 'reversed' : 'upright';
            content += `
                <div class="reading-section">
                    <h3>✨ ${positions[index]} - ${card.name}</h3>
                    <p class="meaning">${card[orientation].meaning}</p>
                    <div class="detailed-reading">
                        <p class="career">💼 事业：${card[orientation].career}</p>
                        <p class="love">💕 感情：${card[orientation].love}</p>
                        <p class="health">🌟 健康：${card[orientation].health}</p>
                    </div>
                </div>
            `;
        });

        // 添加综合建议
        content += `
            <div class="synthesis-section">
                <h3>🎯 综合解读</h3>
                <p>${this.generateSynthesis()}</p>
            </div>
            <div class="fun-fact">
                <h3>✨ 神秘知识</h3>
                <p>${this.currentReading[Math.floor(Math.random() * 3)].funFact}</p>
            </div>
        `;

        return content;
    }

    generateSynthesis() {
        const cards = this.currentReading;
        let synthesis = [];

        // 分析牌阵
        const reversedCount = cards.filter(card => card.isReversed).length;
        const hasPositiveEnding = !cards[2].isReversed; // 未来牌正位

        if (reversedCount >= 2) {
            synthesis.push("当前时期需要特别谨慎，多加反思。");
        }

        if (hasPositiveEnding) {
            synthesis.push("未来走向光明，保持当前的努力方向。");
        }

        // 根据牌的编号分析
        const numbers = cards.map(card => card.number);
        if (numbers.some(n => n < 10)) {
            synthesis.push("处于成长阶段，需要保持耐心和学习的心态。");
        }

        return synthesis.join(' ') || "保持开放和积极的心态，聆听内心的声音！";
    }

    resetReading() {
        this.isReadingInProgress = false;
        this.currentReading = [];
        this.currentStep = -1; // 重置为-1

        // 重置UI
        this.cardSlots.forEach(slot => {
            slot.classList.remove('flipped');
            const cardFront = slot.querySelector('.card-front');
            if (cardFront) cardFront.innerHTML = '';
        });

        // 重置所有容器状态
        this.readingContainer.classList.add('hidden');
        this.cardsContainer.classList.add('hidden');
        this.ritualContainer.classList.remove('hidden');
        this.newReadingButton.classList.add('hidden');

        // 重置步骤指示器
        this.resetSteps();
        
        // 重置提示文本
        this.updateRitualText("闭上眼睛，深呼吸，让心灵沉淀...");

        // 清除动画效果
        AnimationManager.resetEffects();
    }

    // 重置步骤状态
    resetSteps() {
        this.steps.forEach(step => step.classList.remove('active'));
        this.currentStep = -1; // 重置为-1
        this.updateSteps();
    }

    // 更新步骤显示
    updateSteps() {
        this.steps.forEach((step, index) => {
            // 只有当前步骤及之前的步骤会被点亮
            step.classList.toggle('active', index <= this.currentStep);
        });
    }

    getRandomCard() {
        // 修改获取随机卡牌的方法
        const usedIndices = this.currentReading.map(card => this.deck.indexOf(card));
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * this.deck.length);
        } while (usedIndices.includes(randomIndex));

        return {...this.deck[randomIndex]};
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    window.tarotSystem = new TarotSystem();
});

class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.audio.loop = true;
        this.audio.volume = 0.3;
        this.playlist = [
            'music/mystic-ambient.mp3',
            'music/meditation.mp3',
            'music/spiritual.mp3'
        ];
        this.currentTrack = 0;
        this.isPlaying = false;
        this.customTracks = [];

        this.initializePlayer();
        this.bindEvents();
    }

    initializePlayer() {
        this.audio.src = this.playlist[this.currentTrack];
        this.musicBtn = document.querySelector('#toggleMusic');
        this.createFileInput();
        this.updateMusicButton();
    }

    createFileInput() {
        // 创建文件输入控件
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = 'audio/*';
        this.fileInput.style.display = 'none';
        document.body.appendChild(this.fileInput);

        // 创建上传按钮
        this.uploadBtn = document.createElement('button');
        this.uploadBtn.className = 'music-btn upload-btn';
        this.uploadBtn.innerHTML = '📂';
        this.uploadBtn.title = '上传自己的音乐';
        
        // 将上传按钮添加到音乐控制器
        const musicController = document.querySelector('.music-controller');
        if (musicController) {
            musicController.appendChild(this.uploadBtn);
        }
    }

    bindEvents() {
        if (this.musicBtn) {
            this.musicBtn.addEventListener('click', () => this.toggleMusic());
        }

        // 文件上传事件
        this.uploadBtn.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleFileUpload(file);
            }
        });

        // 音乐播放完毕后自动播放下一首
        this.audio.addEventListener('ended', () => {
            this.playNext();
        });
    }

    handleFileUpload(file) {
        if (file.type.startsWith('audio/')) {
            const fileURL = URL.createObjectURL(file);
            this.customTracks.push({
                name: file.name,
                url: fileURL
            });
            
            // 切换到新上传的音乐
            this.audio.src = fileURL;
            this.play();
            
            // 显示提示
            this.showNotification(`正在播放: ${file.name}`);
        } else {
            this.showNotification('请上传音频文件');
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'music-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // 3秒后自动消失
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    toggleMusic() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                this.updateMusicButton();
            })
            .catch(error => {
                console.error('播放失败:', error);
            });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateMusicButton();
    }

    playNext() {
        this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        this.audio.src = this.playlist[this.currentTrack];
        if (this.isPlaying) {
            this.play();
        }
    }

    updateMusicButton() {
        if (this.musicBtn) {
            this.musicBtn.innerHTML = this.isPlaying ? '🔈' : '🔇';
            this.musicBtn.title = this.isPlaying ? '点击暂停音乐' : '点击播放音乐';
        }
    }
}
