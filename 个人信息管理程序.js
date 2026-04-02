// 个人信息管理程序
class UserProfileManager {
    constructor() {
        // 初始化用户资料对象，演示各种数据类型
        this.userProfile = {
            // 个人姓名（字符串）
            name: "张三",
            
            // 年龄（数字）
            age: 25,
            
            // 是否为学生状态（布尔）
            isStudent: false,
            
            // 喜爱的颜色数组
            favoriteColors: ["蓝色", "绿色", "红色"],
            
            // 地址对象（包含街道、城市和邮编）
            address: {
                street: "科技路123号",
                city: "北京",
                zipCode: "100000"
            },
            
            // 添加更多数据类型演示
            hobbies: ["阅读", "游泳", "编程"], // 数组
            contact: { // 嵌套对象
                email: "zhangsan@example.com",
                phone: "13800138000"
            },
            lastLogin: new Date(), // 日期对象
            preferences: null // null值
        };
    }

    // 显示用户资料信息
    displayProfile() {
        console.log("=== 用户资料 ===");
        
        // 演示字符串连接和模板字符串
        console.log("姓名: " + this.userProfile.name);
        console.log(`年龄: ${this.userProfile.age}`);
        console.log(`学生状态: ${this.userProfile.isStudent ? "是" : "否"}`);
        console.log(`喜爱颜色: ${this.userProfile.favoriteColors.join(", ")}`);
        
        // 使用模板字符串展示地址信息
        console.log(`地址: ${this.userProfile.address.city}, ${this.userProfile.address.street}, 邮编: ${this.userProfile.address.zipCode}`);
        
        // 演示更多属性
        console.log(`爱好: ${this.userProfile.hobbies.join(", ")}`);
        console.log(`联系方式: ${this.userProfile.contact.email}, ${this.userProfile.contact.phone}`);
        console.log(`最后登录: ${this.userProfile.lastLogin}`);
        console.log(`偏好设置: ${this.userProfile.preferences}`);
        
        console.log("================");
    }

    // 更新姓名
    updateName(newName) {
        if (typeof newName === 'string' && newName.trim() !== '') {
            this.userProfile.name = newName;
            console.log(`姓名已更新为: ${newName}`);
        } else {
            console.log("错误: 姓名必须是非空字符串");
        }
    }

    // 更新年龄（演示算术操作）
    updateAge(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            // 演示算术操作
            const ageDifference = newAge - this.userProfile.age;
            this.userProfile.age = newAge;
            console.log(`年龄已更新为: ${newAge}`);
            
            if (ageDifference > 0) {
                console.log(`年龄增加了 ${Math.abs(ageDifference)} 岁`);
            } else if (ageDifference < 0) {
                console.log(`年龄减少了 ${Math.abs(ageDifference)} 岁`);
            }
        } else {
            console.log("错误: 年龄必须是正数");
        }
    }

    // 更新学生状态（演示布尔逻辑）
    updateStudentStatus(isStudent) {
        if (typeof isStudent === 'boolean') {
            // 演示布尔逻辑
            const wasStudent = this.userProfile.isStudent;
            this.userProfile.isStudent = isStudent;
            
            if (wasStudent && !isStudent) {
                console.log("学生状态已从学生转为非学生");
            } else if (!wasStudent && isStudent) {
                console.log("学生状态已从非学生转为学生");
            } else {
                console.log(`学生状态保持为: ${isStudent ? "学生" : "非学生"}`);
            }
        } else {
            console.log("错误: 学生状态必须是布尔值");
        }
    }

    // 更新喜爱颜色
    updateFavoriteColors(colors) {
        if (Array.isArray(colors)) {
            this.userProfile.favoriteColors = colors;
            console.log(`喜爱颜色已更新为: ${colors.join(", ")}`);
        } else {
            console.log("错误: 颜色必须是数组格式");
        }
    }

    // 更新地址
    updateAddress(street, city, zipCode) {
        if (typeof street === 'string' && typeof city === 'string' && typeof zipCode === 'string') {
            this.userProfile.address.street = street;
            this.userProfile.address.city = city;
            this.userProfile.address.zipCode = zipCode;
            console.log(`地址已更新为: ${city}, ${street}, 邮编: ${zipCode}`);
        } else {
            console.log("错误: 地址信息必须是字符串格式");
        }
    }

    // 计算年龄相关的实用函数（演示算术操作）
    calculateYearsToRetirement() {
        const retirementAge = 65;
        const yearsLeft = retirementAge - this.userProfile.age;
        
        if (yearsLeft > 0) {
            return yearsLeft;
        } else {
            return 0;
        }
    }

    // 检查是否符合学生优惠条件（演示布尔逻辑）
    isEligibleForStudentDiscount() {
        // 学生且年龄小于30岁才有学生优惠
        return this.userProfile.isStudent && this.userProfile.age < 30;
    }

    // 获取用户简介（演示字符串操作）
    getUserSummary() {
        const studentStatus = this.userProfile.isStudent ? "是一名学生" : "不是学生";
        const discountEligibility = this.isEligibleForStudentDiscount() ? "有资格享受学生折扣" : "没有学生折扣资格";
        
        return `${this.userProfile.name}，${this.userProfile.age}岁，${studentStatus}，居住在${this.userProfile.address.city}。${discountEligibility}`;
    }

    // 演示更多数据类型的操作
    addHobby(hobby) {
        if (typeof hobby === 'string') {
            this.userProfile.hobbies.push(hobby);
            console.log(`爱好已添加: ${hobby}`);
        }
    }

    removeHobby(hobby) {
        const index = this.userProfile.hobbies.indexOf(hobby);
        if (index > -1) {
            this.userProfile.hobbies.splice(index, 1);
            console.log(`爱好已移除: ${hobby}`);
        } else {
            console.log(`未找到爱好: ${hobby}`);
        }
    }
}

// 演示程序使用
console.log("=== 个人信息管理程序演示 ===\n");

// 创建用户管理实例
const userManager = new UserProfileManager();

// 显示初始资料
userManager.displayProfile();

// 演示各种更新功能
console.log("\n--- 更新操作演示 ---");
userManager.updateName("李四");
userManager.updateAge(28);
userManager.updateStudentStatus(true);

// 演示算术操作
console.log(`\n距离退休还有 ${userManager.calculateYearsToRetirement()} 年`);

// 演示布尔逻辑
console.log(`是否有学生折扣资格: ${userManager.isEligibleForStudentDiscount()}`);

// 更新喜爱颜色
userManager.updateFavoriteColors(["紫色", "橙色", "黑色"]);

// 更新地址
userManager.updateAddress("学院路456号", "上海", "200000");

// 添加爱好
userManager.addHobby("旅行");
userManager.addHobby("摄影");

// 显示更新后的资料
console.log("\n--- 更新后的资料 ---");
userManager.displayProfile();

// 显示用户简介
console.log("\n--- 用户简介 ---");
console.log(userManager.getUserSummary());

// 演示更多数据类型
console.log("\n--- 数据类型演示 ---");
console.log("字符串示例:", typeof userManager.userProfile.name);
console.log("数字示例:", typeof userManager.userProfile.age);
console.log("布尔值示例:", typeof userManager.userProfile.isStudent);
console.log("数组示例:", Array.isArray(userManager.userProfile.favoriteColors));
console.log("对象示例:", typeof userManager.userProfile.address);
console.log("日期示例:", userManager.userProfile.lastLogin instanceof Date);
console.log("null值示例:", userManager.userProfile.preferences === null);
