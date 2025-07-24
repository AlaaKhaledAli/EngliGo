// استيراد مكتبة Gradio للتعامل مع الـ API
import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";

/**
 * كلاس للتعامل مع شات بوت تعليم الإنجليزية
 * بيستخدم API الخاص بالبوت اللي على Hugging Face
 */
export class EnglishChatBotAPI {
    constructor() {
        // رابط الـ API الخاص بالبوت بتاعك
        this.API_URL = "YoussefA7med/ChatBot_English_Helper";
        this.client = null;
        
        // متغيرات لحفظ حالة المحادثة
        this.chatHistory = [];
        this.transcript = "";
        this.corrections = "";
        
        // إعداد الكلاس عند إنشاء كائن جديد
        this.initialize();
    }

    /**
     * دالة لتهيئة الاتصال بالـ API
     * بتتصل بالسيرفر وتجهز كل حاجة
     */
    async initialize() {
        try {
            console.log("🔄 بدء الاتصال بالشات بوت...");
            
            // الاتصال بالـ API
            this.client = await Client.connect(this.API_URL);
            
            console.log("✅ تم الاتصال بنجاح!");
            
            // تهيئة المحادثة والحصول على رسالة الترحيب
            await this.initializeChat();
            
        } catch (error) {
            console.error("❌ خطأ في الاتصال:", error);
            throw new Error("فشل في الاتصال بالشات بوت");
        }
        finally{
            
        }
    }

    /**
     * دالة لتهيئة المحادثة والحصول على رسالة الترحيب
     * بتستدعي endpoint الخاص بالتهيئة
     */
    async initializeChat() {
        try {
            console.log("🎬 تهيئة المحادثة...");
            
            // استدعاء API لتهيئة المحادثة
            const result = await this.client.predict("/initialize_chat", {});
            
            // حفظ النتائج في المتغيرات
            this.chatHistory = result.data[0];
            const welcomeAudio = result.data[1];
            this.transcript = result.data[2];
            this.corrections = result.data[3];
            
            console.log("✅ تم تهيئة المحادثة بنجاح!");
            console.log("💬 رسالة الترحيب:", this.transcript);
            
            // لو فيه صوت ترحيب، نشغله
            if (welcomeAudio) {
                console.log("🔊 تم استلام صوت الترحيب");
                this.playAudio(welcomeAudio);
            }
            
            return {
                history: this.chatHistory,
                transcript: this.transcript,
                corrections: this.corrections,
                audio: welcomeAudio
            };
            
        } catch (error) {
            console.error("❌ خطأ في تهيئة المحادثة:", error);
            throw error;
        }
    }

    /**
     * دالة لإرسال ملف صوتي للبوت والحصول على رد
     * @param {File|Blob} audioFile - ملف الصوت المراد إرساله
     * @returns {Object} - رد البوت مع الصوت والنص والتصحيحات
     */
    async sendAudio(audioFile) {
        try {
            console.log("🎤 إرسال الملف الصوتي...");
            
            // التأكد من وجود اتصال
            if (!this.client) {
                throw new Error("لم يتم تهيئة الاتصال بعد");
            }
            
            // إرسال الملف الصوتي مع بيانات المحادثة الحالية
            const result = await this.client.predict("/process_audio", {
                audio: audioFile,
                history: this.chatHistory,
                transcript: this.transcript,
                corrections: this.corrections
            });
            
            // استخراج النتائج
            this.chatHistory = result.data[0];
            const responseAudio = result.data[1];
            this.transcript = result.data[2];
            this.corrections = result.data[3];
            
            console.log("✅ تم استلام رد البوت!");
            console.log("📝 النص الجديد:", this.transcript);
            console.log("📚 التصحيحات:", this.corrections);
            
            // تشغيل الصوت لو متاح
            if (responseAudio) {
                console.log("🔊 تشغيل رد البوت الصوتي...");
                this.playAudio(responseAudio);
            }
            
            return {
                history: this.chatHistory,
                transcript: this.transcript,
                corrections: this.corrections,
                audio: responseAudio
            };
            
        } catch (error) {
            console.error("❌ خطأ في إرسال الصوت:", error);
            throw error;
        }
    }

    /**
     * دالة لمسح المحادثة والبدء من جديد
     * بتستدعي endpoint الخاص بالمسح
     */
    async clearChat() {
        try {
            console.log("🧹 مسح المحادثة...");
            
            // استدعاء API لمسح المحادثة
            const result = await this.client.predict("/clear_chat", {});
            
            // إعادة تعيين المتغيرات
            this.chatHistory = result.data[0];
            const newWelcomeAudio = result.data[1];
            this.transcript = result.data[2];
            this.corrections = result.data[3];
            
            console.log("✅ تم مسح المحادثة وإعادة التهيئة!");
            
            // تشغيل رسالة الترحيب الجديدة
            if (newWelcomeAudio) {
                this.playAudio(newWelcomeAudio);
            }
            
            return {
                history: this.chatHistory,
                transcript: this.transcript,
                corrections: this.corrections,
                audio: newWelcomeAudio
            };
            
        } catch (error) {
            console.error("❌ خطأ في مسح المحادثة:", error);
            throw error;
        }
    }

    /**
     * دالة لتشغيل الملف الصوتي
     * @param {string} audioUrl - رابط الملف الصوتي
     */
    playAudio(audioUrl) {
        try {
            // إنشاء عنصر audio جديد
            const audio = new Audio(audioUrl.url);
            // audio.setAttribute("src",audioUrl)
            // console.log(audioUrl);
            
            
            // تشغيل الصوت
            audio.play().catch(error => {
                console.error("❌ خطأ في تشغيل الصوت:", error);
            });
            
            console.log("🔊 تم تشغيل الصوت");
            
        } catch (error) {
            console.error("❌ خطأ في تشغيل الصوت:", error);
        }
    }

    /**
     * دالة لتسجيل الصوت من الميكروفون
     * @param {number} duration - مدة التسجيل بالثواني (افتراضي: 5 ثواني)
     * @returns {Promise<Blob>} - ملف الصوت المسجل
     */
    async recordAudio(duration = 5) {
        try {
            console.log("🎤 بدء تسجيل الصوت...");
            
            // طلب إذن استخدام الميكروفون
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // إنشاء مسجل الصوت
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks = [];
            
            // تجميع قطع الصوت
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };
            
            // إنشاء promise للانتظار حتى انتهاء التسجيل
            const recordingPromise = new Promise((resolve) => {
                mediaRecorder.onstop = () => {
                    // تحويل القطع إلى ملف صوتي
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    resolve(audioBlob);
                };
            });
            
            // بدء التسجيل
            mediaRecorder.start();
            
            // إيقاف التسجيل بعد المدة المحددة
            setTimeout(() => {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
                console.log("⏹️ تم إيقاف التسجيل");
            }, duration * 1000);
            
            console.log(`⏺️ جاري التسجيل لمدة ${duration} ثانية...`);
            
            return await recordingPromise;
            
        } catch (error) {
            console.error("❌ خطأ في تسجيل الصوت:", error);
            throw error;
        }
    }

    /**
     * دالة للحصول على تاريخ المحادثة الحالي
     * @returns {Array} - تاريخ المحادثة
     */
    getChatHistory() {
        return this.chatHistory;
    }

    /**
     * دالة للحصول على النص الكامل للمحادثة
     * @returns {string} - النص الكامل
     */
    getTranscript() {
        return this.transcript;
    }

    /**
     * دالة للحصول على التصحيحات والاقتراحات
     * @returns {string} - التصحيحات والاقتراحات
     */
    getCorrections() {
        return this.corrections;
    }
}

// =======================
// أمثلة على الاستخدام
// =======================

/**
 * مثال أساسي على استخدام الشات بوت
 */
async function basicExample() {
    try {
        console.log("🚀 بدء المثال الأساسي...");
        
        // إنشاء كائن جديد من الشات بوت
        const chatBot = new EnglishChatBotAPI();
        
        // انتظار تهيئة الاتصال
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // تسجيل صوت لمدة 5 ثواني
        const audioFile = await chatBot.recordAudio(5);
        
        // إرسال الصوت والحصول على رد
        const response = await chatBot.sendAudio(audioFile);
        
        console.log("📋 نتيجة المحادثة:");
        console.log("- النص:", response.transcript);
        console.log("- التصحيحات:", response.corrections);
        
    } catch (error) {
        console.error("❌ خطأ في المثال:", error);
    }
}

/**
 * مثال متقدم مع واجهة HTML
 */
function createChatInterface() {
    // إنشاء HTML للواجهة
    const interfaceHTML = `
        <div id="chat-container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
            <h2>🎓 شات بوت تعليم الإنجليزية</h2>
            
            <div id="chat-messages" style="height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;"></div>
            
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button id="record-btn" style="flex: 1; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px;">
                    🎤 تسجيل الصوت
                </button>
                <button id="clear-btn" style="flex: 1; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px;">
                    🧹 مسح المحادثة
                </button>
            </div>
            
            <div id="corrections" style="background: #f8f9fa; padding: 15px; border-radius: 5px; min-height: 100px;">
                <h4>📚 التصحيحات والاقتراحات</h4>
                <p id="corrections-text">سيتم عرض التصحيحات هنا...</p>
            </div>
        </div>
    `;
    
    // إضافة الواجهة إلى الصفحة
    document.body.innerHTML = interfaceHTML;
    
    // إنشاء كائن الشات بوت
    const chatBot = new EnglishChatBotAPI();
    
    // متغيرات للواجهة
    let isRecording = false;
    
    // عناصر الواجهة
    const messagesDiv = document.getElementById('chat-messages');
    const recordBtn = document.getElementById('record-btn');
    const clearBtn = document.getElementById('clear-btn');
    const correctionsText = document.getElementById('corrections-text');
    
    /**
     * دالة لإضافة رسالة جديدة للواجهة
     */
    function addMessage(sender, message, isAudio = false) {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            margin: 10px 0;
            padding: 10px;
            border-radius: 10px;
            ${sender === 'أنت' ? 'background: #007bff; color: white; text-align: right;' : 'background: #f8f9fa; color: black;'}
        `;
        
        messageDiv.innerHTML = `
            <strong>${sender}:</strong> ${message}
            ${isAudio ? '<br>🔊 <em>تم تشغيل الرد الصوتي</em>' : ''}
        `;
        
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    
    /**
     * دالة لتحديث التصحيحات
     */
    function updateCorrections(corrections) {
        correctionsText.textContent = corrections || 'لا توجد تصحيحات حتى الآن';
    }
    
    // أحداث الأزرار
    recordBtn.addEventListener('click', async () => {
        if (isRecording) return;
        
        try {
            isRecording = true;
            recordBtn.textContent = '⏺️ جاري التسجيل...';
            recordBtn.disabled = true;
            
            // تسجيل الصوت
            const audioFile = await chatBot.recordAudio(5);
            
            // إرسال الصوت
            const response = await chatBot.sendAudio(audioFile);
            
            // تحديث الواجهة
            addMessage('أنت', 'تم إرسال رسالة صوتية', true);
            addMessage('سام', 'تم الرد على رسالتك', true);
            updateCorrections(response.corrections);
            
        } catch (error) {
            console.error('خطأ في التسجيل:', error);
            addMessage('النظام', 'حدث خطأ في التسجيل');
        } finally {
            isRecording = false;
            recordBtn.textContent = '🎤 تسجيل الصوت';
            recordBtn.disabled = false;
        }
    });
    
    clearBtn.addEventListener('click', async () => {
        try {
            await chatBot.clearChat();
            messagesDiv.innerHTML = '';
            updateCorrections('');
            addMessage('النظام', 'تم مسح المحادثة وإعادة التهيئة');
        } catch (error) {
            console.error('خطأ في مسح المحادثة:', error);
        }
    });
    
    // رسالة الترحيب
    setTimeout(() => {
        addMessage('سام', 'مرحباً! أنا سام، مدرس اللغة الإنجليزية. اضغط على زر التسجيل لبدء المحادثة!');
    }, 2000);
}

// تصدير الكلاس للاستخدام
export default EnglishChatBotAPI;

// تصدير الدوال المساعدة
export { basicExample, createChatInterface };

// =======================
// نصائح للاستخدام
// =======================

/*
💡 نصائح مهمة:

1. تأكد من تثبيت مكتبة @gradio/client:
   npm install @gradio/client

2. استخدم الكلاس بالطريقة دي:
   const chatBot = new EnglishChatBotAPI();

3. لتسجيل الصوت وإرساله:
   const audioFile = await chatBot.recordAudio(5);
   const response = await chatBot.sendAudio(audioFile);

4. لمسح المحادثة:
   await chatBot.clearChat();

5. للحصول على بيانات المحادثة:
   const history = chatBot.getChatHistory();
   const transcript = chatBot.getTranscript();
   const corrections = chatBot.getCorrections();

6. تأكد من السماح للموقع بالوصول للميكروفون

7. الكود مكتوب بـ ES6 modules، تأكد من دعم المتصفح
*/